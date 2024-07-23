import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assessments } from '../interfaces/assessments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetassessmentsService {
  headers: any;

  constructor(private http: HttpClient,) { }

  getToken(){
    return localStorage.getItem('X-Token');
  }

  getHeaders(){
    return this.headers = new HttpHeaders({'X-Token':  this.getToken() || ''});
  }
  getGrade(): Observable<Assessments> {
   return this.http.get<Assessments>('https://user-assessment-api.vercel.app/api/userassessments', {headers: this.getHeaders()})
  }
}
