import { GetassessmentsService } from './../services/getassessments.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Assessments } from '../interfaces/assessments';

@Injectable({
  providedIn: 'root'
})
export class AssessmentsResolver implements Resolve<Assessments> {
  constructor(private getassessmentsService: GetassessmentsService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Assessments> {
     return this.getassessmentsService.getGrade()
  }
}
