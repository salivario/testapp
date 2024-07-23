import { Injectable } from '@angular/core';
import { Assessments } from '../interfaces/assessments';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  user!: Assessments

  constructor() { }
  getUserAssessment(){
    return this.user;
  }
  setUserAssessment(data: Assessments){
    this.user = data;
  }
}
