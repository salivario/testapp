import { AssessmentsResolver } from './resolvers/assessments.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './components/main/authorization/authorization.component';
import { AssessmentComponent } from './components/main/assessment/assessment.component';
import { AssessmentGuard } from './guards/assessment.guard';

const routes: Routes = [
  {path: "", component: AuthorizationComponent},
  {path: "assessments", component: AssessmentComponent,canActivate: [AssessmentGuard], resolve: {assessments: AssessmentsResolver}},
  { path: "admin", loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
