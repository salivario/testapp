import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Assessments } from 'src/app/interfaces/assessments';
import { Graph } from 'src/app/interfaces/graph';
import { Role } from 'src/app/interfaces/role';
import { AdminService } from 'src/app/services/admin.service';
import { GetgraphService } from 'src/app/services/getgraph.service';


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit{
  role!: string;
  constructor(private route: ActivatedRoute, private getgraphService: GetgraphService, private store: Store<Role>, private adminService: AdminService, private router: Router){
    this.store.select('role').subscribe(data => this.role = data)
  }
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
  send(user: Assessments){
    this.adminService.setUserAssessment(user);
    this.router.navigate(['/admin/new-assessments'])

  }
}
