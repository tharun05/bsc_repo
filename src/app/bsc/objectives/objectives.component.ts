import {Component, OnInit} from '@angular/core';
import {BscService} from '../bsc.service';
import {StrategyService} from '../../strategy/strategy.service';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss']
})
export class ObjectivesComponent implements OnInit {
  codeAndName: any;
  orgName: any;
  balanceScoreCardData: any;
  codeName: any;
  PerspectivesByCode: any;
  perspectives: any;
  themes: any;

  reportingFrequency = [
    {id: 1, frequency: 'WEEKLY'},
    {id: 2, frequency: 'DAILY'},
    {id: 3, frequency: 'YEARLY'},
    {id: 3, frequency: 'MONTHLY'},
    {id: 3, frequency: 'QUATERLY'},
    {id: 3, frequency: 'HOURLY'},
  ];

  constructor(private bscService: BscService,
              private strategyService: StrategyService,
              private formBuilder: FormBuilder) {
  }

  objectiveForm = this.formBuilder.group({
    orgCode: ['', [Validators.required]],
    orgName: ['', [Validators.required]],
    scCode: [''],
    scName: [''],
    name: [''],
    code: [''],
    description: [''],
    perspectiveCode: [''],
    additionalFields: [[]],
    perspectiveName: [''],
    themeCode: [''],
    themeName: [''],
    reportingFrequency: [''],
    collaborators: [[]],
    owner: ['TEST'],
    attachmentUrls: [[]],
    analysis: [''],
    recommendations: [''],
    dependentItems: [[]],
    unmapped: [false]
  });

  ngOnInit() {
    this.getOrgUnitCode();
    this.getAllPerspectives();
    this.getBalanceScoreCard();
    this.getAllThemes();
    this.getAllObjectives();
  }

  getOrgUnitCode() {
    this.strategyService.getCodeAndName().subscribe((codes) => {
      this.codeAndName = codes;
    });
  }

  getBalanceScoreCard() {
    this.bscService.getBalanceScoreCard().subscribe((data: any) => {
      this.balanceScoreCardData = data;
      // this.getBscCodeAndName(this.balanceScoreCardData);
    });
  }

  getAllPerspectives() {
    this.bscService.getPerspective().subscribe((codes) => {
      this.perspectives = codes;
    });
  }

  getAllThemes() {
    this.bscService.getThemes().subscribe((theme) => {
      this.themes = theme;
    });
  }

  getCodeName() {
    this.codeAndName.forEach((val, key) => {
      if (this.objectiveForm.controls.orgCode.value === val.code) {
        this.orgName = val.name.toUpperCase();
        this.objectiveForm.controls.orgName.setValue(this.orgName);
      }
    });
  }

  getScorecardName() {
    this.balanceScoreCardData.forEach((val, key) => {
      if (this.objectiveForm.controls.scCode.value === val.code) {
        this.codeName = val.name.toUpperCase();
        this.objectiveForm.controls.scName.setValue(this.codeName);
      }
    });
    this.getPerspectivesByCode();
  }

  getPerspectivesByCode() {
    this.bscService.getPerspectivesByCode(this.objectiveForm.controls.scCode.value).subscribe((data: any) => {
      this.PerspectivesByCode = data;
      console.log(this.PerspectivesByCode);
    });
  }

  getThemeCode() {
    this.themes.forEach((val, key) => {
      if (this.objectiveForm.controls.themeName.value === val.name) {
        this.objectiveForm.controls.themeCode.setValue(val.code);
      }
    });
  }

  getAllObjectives() {
    this.bscService.getAllObjectives().subscribe((data: any) => {
      console.log('objectives', data);
    });
  }

  getPerspectiveCode() {
    this.perspectives.forEach((val, key) => {
      if (this.objectiveForm.controls.perspectiveName.value === val.name) {
        this.objectiveForm.controls.perspectiveCode.setValue(val.code);
      }
    });
  }

  saveObjective() {
    const reqObj = this.objectiveForm.value;
    this.bscService.saveObjective(reqObj).subscribe((data: any) => {
      console.log(data);
    });
  }

}
