import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateSignComponent } from './features/sign/candidate-sign/sign.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployerSignComponent } from './features/sign/employer-sign/employer-sign.component';
import { NaviEmployerInfoComponent } from './features/navi/navi-employer-info/navi-employer-info.component';
import { NaviSignComponent } from './features/navi/navi-sign/navi-sign.component';
import { FooterComponent } from './features/footer/footer.component';
import { EmployerListComponent } from './features/customers/employer/employer-list/employer-list.component';
import { CandidateListComponent } from './features/customers/candidate/candidate-list/candidate-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NaviSystemEmployeeInfoComponent } from './features/navi/navi-system-employee-info/navi-system-employee-info.component';
import { PositionAddComponent } from './features/position/position-add/position-add.component';
import { PositionListComponent } from './features/position/position-list/position-list.component';
import { NaviCandidateInfoComponent } from './features/navi/navi-candidate-info/navi-candidate-info.component';
import { NaviComponent } from './features/navi/navi/navi.component';
import { UserLoginComponent } from './features/user-login/user-login.component';
import { HomeComponent } from './features/home/home.component';
import { JobAdvertisementComponent } from './features/job-advertisement/job-advertisement-add/job-advertisement.component';
import { JobAdvertisementListComponent } from './features/job-advertisement/job-advertisement-list/job-advertisement-list.component';
import { JobAdvertisementListByEmployerComponent } from './features/job-advertisement/job-advertisement-list-by-employer/job-advertisement-list-by-employer.component';
import { AccordionModule } from 'primeng/accordion';
import { CandidateSchoolFormComponent } from './features/customers/candidate/candidate-school/candidate-school-form/candidate-school-form.component';
import { CandidateSkillFromComponent } from './features/customers/candidate/candidate-skill/candidate-skill-from/candidate-skill-from.component';
import { CandidateLanguageFormComponent } from './features/customers/candidate/candidate-language/candidate-language-form/candidate-language-form.component';
import { CandidateJobExperinceFormComponent } from './features/customers/candidate/candidate-jobExperince/candidate-job-experince-form/candidate-job-experince-form.component';
import { CvAddComponent } from './features/cv/cv-add/cv-add.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CandidateSignComponent,
    EmployerSignComponent,
    NaviEmployerInfoComponent,
    NaviSignComponent,
    FooterComponent,
    PositionAddComponent,
    EmployerListComponent,
    CandidateListComponent,
    PositionListComponent,
    NaviSystemEmployeeInfoComponent,
    NaviCandidateInfoComponent,
    UserLoginComponent,
    HomeComponent,
    JobAdvertisementComponent,
    JobAdvertisementListComponent,
    JobAdvertisementListByEmployerComponent,
    CvAddComponent,
    CandidateSchoolFormComponent,
    CandidateSkillFromComponent,
    CandidateLanguageFormComponent,
    CandidateJobExperinceFormComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot({ positionClass: "toast-bottom-right" }),
    AccordionModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
