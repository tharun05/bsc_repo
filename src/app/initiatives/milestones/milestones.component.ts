import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Options} from 'ng5-slider';
import {BscService} from '../../bsc/bsc.service';
import {InitiativeService} from '../initiative.service';
import {StrategyService} from '../../strategy/strategy.service';
import {CustomValidators} from '../../shared/utils/custom-validator';

@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.scss']
})
export class MilestonesComponent implements OnInit {
  codeAndName: any;
  orgName: any;
  initiativeCode: any;
  initiativeName: any;
  focusedElement = '';

  options: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 10},
      {value: 20},
      {value: 30},
      {value: 40},
      {value: 50},
      {value: 60},
      {value: 70},
      {value: 80},
      {value: 90},
      {value: 100}
    ]
  };


  constructor(private initiativeService: InitiativeService,
              private formBuilder: FormBuilder,
              private bscService: BscService,
              private strategyService: StrategyService,
              private customValidators: CustomValidators) {
  }

  milestoneForm = this.formBuilder.group({
    orgCode: ['', this.customValidators.required],
    orgName: ['', this.customValidators.required],
    initiativeCode: [''],
    initiativeName: [''],
    code: ['', this.customValidators.required],
    name: ['', this.customValidators.required],
    description: [''],
    owner: [''],
    collaborators: [''],
    parentCode: [''],
    parentName: [''],
    startDate: [''],
    endDate: [''],
    analysis: [''],
    recommendation: [''],
    status: [''],
    percentComplete: [''],
    completed: [''],
    completionDate: [[]]
  });

  ngOnInit() {
    this.getOrgUnitCode();
    this.getInitiative();
  }

  getOrgUnitCode() {
    this.strategyService.getCodeAndName().subscribe((codes) => {
      this.codeAndName = codes;
    });
  }

  getInitiative() {
    this.initiativeService.getInitiative().subscribe((codes) => {
      this.initiativeCode = codes;
    });
  }

  onFocusForElement(element) {
    if (this.focusedElement !== element) {
      this.focusedElement = element;
    }
  }

  onFocusOutForElement() {
    this.focusedElement = undefined;
  }

  getInitiativeName() {
    this.initiativeCode.forEach((val, key) => {
      if (this.milestoneForm.controls.initiativeCode.value === val.code) {
        this.initiativeName = val.name.toUpperCase();
        this.milestoneForm.controls.initiativeName.setValue(this.initiativeName);
      }
    });
  }

  getCodeAndName() {
    this.codeAndName.forEach((val, key) => {
      if (this.milestoneForm.controls.orgCode.value === val.code) {
        this.orgName = val.name.toUpperCase();
        this.milestoneForm.controls.orgName.setValue(this.orgName);
      }
    });
  }

  saveMilestone() {
    console.log(this.milestoneForm.value);
  }

  percentCompleted(event: any) {
    this.milestoneForm.controls.percentComplete.setValue(event);
  }

}
