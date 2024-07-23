import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Assessments } from 'src/app/interfaces/assessments';
import { Graph } from 'src/app/interfaces/graph';
import { GetgraphService } from 'src/app/services/getgraph.service';

@Component({
  selector: 'app-new-assessment',
  templateUrl: './new-assessment.component.html',
  styleUrls: ['./new-assessment.component.scss']
})
export class NewAssessmentComponent implements OnInit{
  constructor(private adminService: AdminService, private getgraphService: GetgraphService, private formBuilder: FormBuilder){}
  assessments: Assessments[]=[];
  graph!: Graph;
  isGraph: boolean = false;
  form!: FormGroup;
  ngOnInit(): void {
    this.assessments.push(this.adminService.getUserAssessment());
    this.form = this.formBuilder.group({
      agreeableness: [''],
      drive: [''],
      luck: [''],
      openness: [''],
  })
  }
  printGraph(id: number){
    this.getgraphService.getGraph(id).subscribe(data => {
      this.graph = data;
      this.form.setValue({
        agreeableness: data.data['agreeableness'] || '',
        drive: data.data['drive'] || '',
        luck: data.data['luck'] || '',
        openness: data.data['openness'] || ''
      });
      this.isGraph = true;
    });
  }
  onSubmit(){
    console.log(this.form.value)
  }

}
