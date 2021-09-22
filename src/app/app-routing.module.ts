import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './features/customers/candidate/candidate-list/candidate-list.component';
import { EmployerListComponent } from './features/customers/employer/employer-list/employer-list.component';
import { CandidateSignComponent } from './features/sign/candidate-sign/sign.component';
import { PositionListComponent } from './features/position/position-list/position-list.component';
import { PositionAddComponent } from './features/position/position-add/position-add.component';
import { UserLoginComponent } from './features/user-login/user-login.component';
import { HomeComponent } from './features/home/home.component';
import { JobAdvertisementComponent } from './features/job-advertisement/job-advertisement-add/job-advertisement.component';
import { JobAdvertisementListComponent } from './features/job-advertisement/job-advertisement-list/job-advertisement-list.component';
import { JobAdvertisementListByEmployerComponent } from './features/job-advertisement/job-advertisement-list-by-employer/job-advertisement-list-by-employer.component';
import { EmployerSignComponent } from './features/sign/employer-sign/employer-sign.component';
import { JobAdvertisementGuard } from './guards/job-advertisement/job-advertisement.guard';
import { CvAddComponent } from './features/cv/cv-add/cv-add.component';
import { PositionAddGuard } from './guards/position-add/position-add.guard';
import { ListCandidatesGuard } from './guards/list-candidates/list-candidates.guard';
import { ListEmployersGuard } from './guards/list-employer/list-employers.guard';
import { ListPositionsGuard } from './guards/list-positions/list-positions.guard';
import { CvAddGuard } from './guards/cv-add/cv-add.guard';

const routes: Routes = [
  { path: '',  pathMatch: 'full',component: JobAdvertisementListComponent },
  { path: "home", pathMatch: 'full', component: HomeComponent },
  { path: "sign", component: CandidateSignComponent },
  { path: "login", component: UserLoginComponent },
  { path: "candidate-sign", component: CandidateSignComponent },
  { path: "employer-sign", component: EmployerSignComponent },
  { path: "positions-add", component: PositionAddComponent, canActivate: [PositionAddGuard] },
  { path: "list-employers", component: EmployerListComponent, canActivate: [ListEmployersGuard] },
  { path: "list-candidates", component: CandidateListComponent, canActivate: [ListCandidatesGuard] },
  { path: "list-positions", component: PositionListComponent, canActivate: [ListPositionsGuard] },
  { path: "job-advertisement-add", component: JobAdvertisementComponent, canActivate: [JobAdvertisementGuard] },
  { path: "job-advertisement-list", component: JobAdvertisementListComponent },
  { path: "cv-add", component: CvAddComponent, canActivate: [CvAddGuard] },
  { path: "job-advertisement-list/jobAdvertisements/:employerId", component: JobAdvertisementListByEmployerComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
