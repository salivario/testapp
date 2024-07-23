import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAssessmentComponent } from './new-assessment/new-assessment.component';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
const routes: Routes = [
  { path: 'new-assessments', component: NewAssessmentComponent },
];

@NgModule({
  declarations: [
    NewAssessmentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
