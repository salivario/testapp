import { AssessmentsResolver } from './resolvers/assessments.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './components/main/authorization/authorization.component';
import { AssessmentComponent } from './components/main/assessment/assessment.component';

const routes: Routes = [
  {path: "", component: AuthorizationComponent},
  {path: "assessments", component: AssessmentComponent, resolve: {assessments: AssessmentsResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
