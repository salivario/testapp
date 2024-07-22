import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { Assessments } from 'src/app/interfaces/assessments';
import { Graph } from 'src/app/interfaces/graph';
import { GetgraphService } from 'src/app/services/getgraph.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit{
  constructor(private route: ActivatedRoute, private getgraphService: GetgraphService){}
  assessments!: Assessments[];
  graph!: Graph;
  isGraph: boolean = false;
  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.assessments = data['assessments'];
    }
    );
  }
  printGraph(id: number){
    this.getgraphService.getGraph(id).subscribe(data => {
      this.isGraph = true;
      return this.graph = data});
  }
}
