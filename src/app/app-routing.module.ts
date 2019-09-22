import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OverviewComponent} from './strategy/overview/overview.component';
import {CorporateStructureComponent} from './strategy/corporate-structure/corporate-structure.component';
import {StrategyPreviewComponent} from './strategy/strategy-preview/strategy-preview.component';
import {StrategyComponent} from './strategy/strategy.component';
import {ValueGapComponent} from './strategy/value-gap/value-gap.component';
import {ValueGapCloserComponent} from './strategy/value-gap-closer/value-gap-closer.component';
import {StrategyAnalysisComponent} from './strategy/strategy-analysis/strategy-analysis.component';
import {StrategyProjectionComponent} from './strategy/strategy-projection/strategy-projection.component';
import {BusinessScoreCardComponent} from './bsc/business-score-card/business-score-card.component';
import {BscComponent} from './bsc/bsc/bsc.component';
import {PerspectiveComponent} from './bsc/perspective/perspective.component';
import {ThemesComponent} from './bsc/themes/themes.component';
import {ObjectivesComponent} from './bsc/objectives/objectives.component';
import {MeasuresComponent} from './bsc/measures/measures.component';
import {InitiativeComponent} from './initiatives/initiative/initiative.component';
import {CorporatesbuComponent} from './alignments/corporatesbu/corporatesbu.component';
import {CorporatetosbuComponent} from './alignments/corporatetosbu/corporatetosbu.component';
import {CorporatetoboardComponent} from './alignments/corporatetoboard/corporatetoboard.component';
import {SbutosbuComponent} from './alignments/sbutosbu/sbutosbu.component';
import {HralignmentsComponent} from './alignments/hralignments/hralignments.component';
import {ItalignmentsComponent} from './alignments/italignments/italignments.component';
import {AlignmentsComponent} from './alignments/alignments/alignments.component';
import {MilestonesComponent} from './initiatives/milestones/milestones.component';
import {InitiativesComponent} from './initiatives/initiatives/initiatives.component';
import {GanttchartComponent} from './initiatives/ganntchart/ganttchart.component';
import {StrategyreviewComponent} from './strategyreview/strategyreview/strategyreview.component';
import {ObjectivestoryComponent} from './strategyreview/objectivestory/objectivestory.component';
import {InitiativestoryComponent} from './strategyreview/initiativestory/initiativestory.component';
import {ThemestoryComponent} from './strategyreview/themestory/themestory.component';
import {ActionitemsComponent} from './actionItems/actionitems/actionitems.component';
import {ActionItemComponent} from './actionItems/action-item/action-item.component';
import {RiskassessmentsComponent} from './riskassessment/riskassessments/riskassessments.component';
import {RiskassessmentComponent} from './riskassessment/riskassessment/riskassessment.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'initiatives', component: InitiativesComponent,
    children: [
      {path: 'initiative', component: InitiativeComponent},
      {path: 'milestones', component: MilestonesComponent},
      {path: 'ganttChart', component: GanttchartComponent}
    ]
  },
  {
    path: 'strategy', component: StrategyComponent,
    children: [
      {path: 'overview', component: OverviewComponent},
      {path: 'corporateStructure', component: CorporateStructureComponent},
      {path: 'strategyPreview', component: StrategyPreviewComponent},
      {path: 'strategyAnalysis', component: StrategyAnalysisComponent},
      {path: 'strategyProjection', component: StrategyProjectionComponent},
      {path: 'valueGap', component: ValueGapComponent},
      {path: 'valueGapCloser', component: ValueGapCloserComponent}
    ]
  },
  {
    path: 'bsc', component: BusinessScoreCardComponent,
    children: [
      {path: 'bsc', component: BscComponent},
      {path: 'perspective', component: PerspectiveComponent},
      {path: 'themes', component: ThemesComponent},
      {path: 'objectives', component: ObjectivesComponent},
      {path: 'measures', component: MeasuresComponent}
    ]
  }, {
    path: 'alignments', component: AlignmentsComponent,
    children: [
      {path: 'corporatesbu', component: CorporatesbuComponent},
      {path: 'corporatetosbu', component: CorporatetosbuComponent},
      {path: 'corporatetoboard', component: CorporatetoboardComponent},
      {path: 'sbutosbu', component: SbutosbuComponent},
      {path: 'hralignment', component: HralignmentsComponent},
      {path: 'italignment', component: ItalignmentsComponent}
    ]
  }, {
    path: 'strategyreview', component: StrategyreviewComponent,
    children: [
      {path: 'themeStory', component: ThemestoryComponent},
      {path: 'objectiveStory', component: ObjectivestoryComponent},
      {path: 'initiativeStory', component: InitiativestoryComponent}
    ]
  },
  {
    path: 'actionItems', component: ActionitemsComponent,
    children: [
      {path: 'actionItem', component: ActionItemComponent}
    ]
  }, {
    path: 'riskassessments', component: RiskassessmentsComponent,
    children: [
      {path: 'riskassessment', component: RiskassessmentComponent}
    ]
  }
  // {path: '', loadChildren: './auth/auth.module#AuthModule'},
  // {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  // {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  // {path: 'strategy', loadChildren: './strategy/strategy.module#StrategyModule'},
  // {path: 'strategyMap', loadChildren: './strategyMap/strategyMap.module#StrategyMapModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
