import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAssessmentComponent } from './new-assessment/new-assessment.component';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { NewAssessmentsGuard } from 'src/app/guards/new-assessments.guard';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: 'new-assessments', component: NewAssessmentComponent,canActivate: [NewAssessmentsGuard] },
];

@NgModule({
  declarations: [
    NewAssessmentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
