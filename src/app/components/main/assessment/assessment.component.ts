import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { Assessments } from 'src/app/interfaces/assessments';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit{
  
  constructor(private route: ActivatedRoute){}
  assestments!: Assessments;
  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.assestments = data['assessments'];
      console.log(this.assestments)
    }
    );
  }
}
