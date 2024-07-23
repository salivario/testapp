import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Assessments } from 'src/app/interfaces/assessments';
import { Graph } from 'src/app/interfaces/graph';

@Component({
  selector: 'app-new-assessment',
  templateUrl: './new-assessment.component.html',
  styleUrls: ['./new-assessment.component.scss']
})
export class NewAssessmentComponent implements OnInit{
  constructor(private adminService: AdminService){}
  assessments: Assessments[]=[];
  graph!: Graph;
  isGraph: boolean = false;
  ngOnInit(): void {
    this.assessments.push(this.adminService.getUserAssessment());
  }

}
