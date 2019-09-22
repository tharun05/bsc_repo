import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {TagInputModule} from 'ngx-chips';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {SubheaderComponent} from './shared/components/subheader/subheader.component';
import {WINDOW_PROVIDERS} from './shared/window.service';
import {FooterComponent} from './shared/components/footer/footer.component';
import {LoginComponent} from './auth/login/login.component';
import {AppService} from './shared/app.service';
import {OverviewComponent} from './strategy/overview/overview.component';
import {CorporateStructureComponent} from './strategy/corporate-structure/corporate-structure.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StrategyPreviewComponent} from './strategy/strategy-preview/strategy-preview.component';
import {StrategyAnalysisComponent} from './strategy/strategy-analysis/strategy-analysis.component';
import {StrategyProjectionComponent} from './strategy/strategy-projection/strategy-projection.component';
import {StrategyComponent} from './strategy/strategy.component';
import {ValueGapComponent} from './strategy/value-gap/value-gap.component';
import {ValueGapCloserComponent} from './strategy/value-gap-closer/value-gap-closer.component';
import {DataTablesModule} from 'angular-datatables';
import {EmitterService} from './shared/emitter.service';
import {AuthService} from './auth/auth.service';
import {StrategyService} from './strategy/strategy.service';
import {InitiativeService} from './initiatives/initiative.service';
import {HttpService} from './shared/http.service';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {StrategyAnalysisService} from './strategy/strategy-analysis/strategy-analysis.service';
import {TagInputComponent} from './shared/components/tag-input/tag-input.component';
import {BusinessScoreCardComponent} from './bsc/business-score-card/business-score-card.component';
import {BscComponent} from './bsc/bsc/bsc.component';
import {PerspectiveComponent} from './bsc/perspective/perspective.component';
import {ModalComponent} from './shared/components/modal/modal.component';
import {ThemesComponent} from './bsc/themes/themes.component';
import {ObjectivesComponent} from './bsc/objectives/objectives.component';
import {BscService} from './bsc/bsc.service';
import {MeasuresComponent} from './bsc/measures/measures.component';
import {InitiativeComponent} from './initiatives/initiative/initiative.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {Ng5SliderModule} from 'ng5-slider';
import {LinkobjectiveComponent} from './bsc/linkobjective/linkobjective.component';
import {CorporatesbuComponent} from './alignments/corporatesbu/corporatesbu.component';
import {CorporatetosbuComponent} from './alignments/corporatetosbu/corporatetosbu.component';
import {CorporatetoboardComponent} from './alignments/corporatetoboard/corporatetoboard.component';
import {SbutosbuComponent} from './alignments/sbutosbu/sbutosbu.component';
import {HralignmentsComponent} from './alignments/hralignments/hralignments.component';
import {ItalignmentsComponent} from './alignments/italignments/italignments.component';
import {AlignmentsComponent} from './alignments/alignments/alignments.component';
import {AlignmentService} from './alignments/alignments.service';
import {Util} from './shared/utils/util';
import {CustomValidators} from './shared/utils/custom-validator';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { MilestonesComponent } from './initiatives/milestones/milestones.component';
import { InitiativesComponent } from './initiatives/initiatives/initiatives.component';
import { GanttchartComponent } from './initiatives/ganntchart/ganttchart.component';
import { ObjectivestoryComponent } from './strategyreview/objectivestory/objectivestory.component';
import { ThemestoryComponent } from './strategyreview/themestory/themestory.component';
import { InitiativestoryComponent } from './strategyreview/initiativestory/initiativestory.component';
import { StrategyreviewComponent } from './strategyreview/strategyreview/strategyreview.component';
import { ActionitemsComponent } from './actionItems/actionitems/actionitems.component';
import { ActionItemComponent } from './actionItems/action-item/action-item.component';
import { RiskassessmentComponent } from './riskassessment/riskassessment/riskassessment.component';
import { RiskassessmentsComponent } from './riskassessment/riskassessments/riskassessments.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubheaderComponent,
    FooterComponent,
    LoginComponent,
    OverviewComponent,
    CorporateStructureComponent,
    DashboardComponent,
    StrategyPreviewComponent,
    StrategyComponent,
    ValueGapComponent,
    ValueGapCloserComponent,
    StrategyAnalysisComponent,
    StrategyProjectionComponent,
    TagInputComponent,
    BusinessScoreCardComponent,
    BscComponent,
    PerspectiveComponent,
    ModalComponent,
    ThemesComponent,
    ObjectivesComponent,
    MeasuresComponent,
    InitiativeComponent,
    LinkobjectiveComponent,
    CorporatesbuComponent,
    CorporatetosbuComponent,
    CorporatetoboardComponent,
    SbutosbuComponent,
    HralignmentsComponent,
    ItalignmentsComponent,
    AlignmentsComponent,
    MilestonesComponent,
    InitiativesComponent,
    GanttchartComponent,
    ObjectivestoryComponent,
    ThemestoryComponent,
    InitiativestoryComponent,
    StrategyreviewComponent,
    ActionitemsComponent,
    ActionItemComponent,
    RiskassessmentComponent,
    RiskassessmentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    TagInputModule,
    Ng5SliderModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot({positionClass: 'toast-top-center', timeOut: 2000}),
    TranslateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    WINDOW_PROVIDERS,
    AppService,
    EmitterService,
    AuthService,
    StrategyService,
    HttpService,
    StrategyAnalysisService,
    BscService,
    InitiativeService,
    AlignmentService,
    Util,
    CustomValidators
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
