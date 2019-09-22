import {Component, OnInit} from '@angular/core';
import {CorporateStructure} from '../../entities/corporateStructure';
import {FormBuilder, Validators} from '@angular/forms';
import {AppService} from '../../shared/app.service';
import {StrategyService} from '../strategy.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {EmitterService} from '../../shared/emitter.service';
import {CustomValidators} from '../../shared/utils/custom-validator';
import {Util} from './../../shared/utils/util';

@Component({
  selector: 'app-corporate-structure',
  templateUrl: './corporate-structure.component.html',
  styleUrls: ['./corporate-structure.component.scss']
})
export class CorporateStructureComponent implements OnInit {
  mission = 'The Vision statetment and mission statement are often confused, ' +
    'and many companies use the terms interchangeably. However,' +
    ' they each have a different purpose';
  editMission = false;
  editVision = false;
  editValue = false;
  missiontxt: any;
  visiontxt: any;
  valuetxt: any;
  isOrgAvailable = false;
  updateCounter = 0;
  orgId: any;
  codeAndName;
  corporateStructure: CorporateStructure;
  organizationData: any;
  focusedElement;
  errorMessage: any;
  fileAsBase64: any;
  unitCodes = [
    {name: 'Group Company', value: 'Group Company'},
    {name: 'Corporate Unit', value: 'Corporate Unit'},
    {name: 'Corporate Department', value: 'Corporate Department'},
    {name: 'Subsidiary', value: 'Subsidiary'},
    {name: 'Subsidiary Department', value: 'Subsidiary Department'}
  ];

  constructor(private formBuilder: FormBuilder,
              private strategyService: StrategyService,
              private toastrService: ToastrService,
              private router: Router,
              private appService: AppService,
              private activatedRoute: ActivatedRoute,
              private customValidators: CustomValidators,
              private util: Util,
              private emitterService: EmitterService) {
    this.corporateStructure = new CorporateStructure();
  }

  corporateStructureForm = this.formBuilder.group({
    code: ['', [this.customValidators.required]],
    parentCode: ['', [this.customValidators.required]],
    name: ['', [this.customValidators.required]],
    managerName: ['', [this.customValidators.required]],
    employeeCount: ['', []],
    logoUrl: ['', []],
    type: ['', []],
    location: ['', []],
    head: ['', []],
    version: ['', []],
    missionStmt: ['Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc semper massa elit, et facilisis turpis facilisis vel.', []],
    visionStmt: ['Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc semper massa elit, et facilisis turpis facilisis vel.', []],
    valuesStmt: ['Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc semper massa elit, et facilisis turpis facilisis vel.', []]
  });

  ngOnInit() {
    this.missiontxt = this.corporateStructureForm.controls.missionStmt.value;
    this.visiontxt = this.corporateStructureForm.controls.visionStmt.value;
    this.valuetxt = this.corporateStructureForm.controls.valuesStmt.value;
    this.getCodeAndName();
    this.activatedRoute.queryParams.subscribe(params => {
      this.orgId = params['id'];
      if (!!this.orgId) {
        this.getOrganizationById(this.orgId);
      }
    });
  }

  shouldShowErrors(fieldName, formName) {
    if (this.focusedElement && this.focusedElement === fieldName) {
      return false;
    } else {
      return this.util.shouldShowErrors(fieldName, formName);
    }
  }

  onFocusForElement(element) {
    if (this.focusedElement !== element) {
      this.focusedElement = element;
    }
  }

  onFocusOutForElement() {
    this.focusedElement = undefined;
  }

  isButtonDisabled(formName) {
    return this.util.isButtonDisabled(formName);
  }

  getOrganizationById(id) {
    this.strategyService.getOrganizationById(id).subscribe((organizationData: any) => {
      if (!!organizationData) {
        this.organizationData = organizationData;
        this.corporateStructureForm.patchValue(this.organizationData);
      }

    });
  }

  editMissionText() {
    this.editMission = true;
  }

  saveMissionText() {
    this.editMission = false;
    this.missiontxt = this.corporateStructureForm.controls.missionStmt.value;
  }

  editVisionText() {
    this.editVision = true;
  }

  saveVisionText() {
    this.editVision = false;
    this.visiontxt = this.corporateStructureForm.controls.visionStmt.value;
  }

  editValueText() {
    this.editValue = true;
  }

  saveValueText() {
    this.editValue = false;
    this.valuetxt = this.corporateStructureForm.controls.valuesStmt.value;
  }

  submitOrganization() {
    if (!!this.orgId) {
      this.isOrgAvailable = true;
      this.strategyService.UpdateOrganization(this.corporateStructureForm.value, this.orgId).subscribe((updatedOrg) => {
        this.orgId = undefined;
        this.corporateStructureForm.reset();
        this.toastrService.success('Updated Successfully');
      }, error => {
        this.toastrService.error('Failed to Update Organization');
      });
    } else {
      this.strategyService.saveOrganization(this.corporateStructureForm.value).subscribe((orgData: any) => {
        this.isOrgAvailable = true;
        this.toastrService.success('Saved Successfully');
        this.orgId = undefined;
        this.corporateStructureForm.reset();
        this.orgId = orgData.id;
      }, error => {
        this.toastrService.error('Failed to save, Please Try again later');
      });
    }
  }

  getCodeAndName() {
    this.strategyService.getCodeAndName().subscribe((data: any) => {
      this.codeAndName = data;
      this.emitterService.broadcastParentOrgUnitCode(this.codeAndName);
    });
  }

  orgStructure() {
  }

  routeToSummaryView() {
    this.router.navigate(['/strategy/strategyPreview'], {queryParams: {id: this.orgId}});
  }

  clearFields() {
    this.orgId = undefined;
    this.corporateStructureForm.reset();
  }

  uploadLogo(event: any) {
    const reader = new FileReader();
    if (event.target.files[0].size >= 2097152) {
      this.errorMessage = 'File size should be less than 2 MB';
    } else {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.fileAsBase64 = reader.result;
        this.corporateStructureForm.controls.logoUrl.setValue(this.fileAsBase64);
      };
    }
  }
}
