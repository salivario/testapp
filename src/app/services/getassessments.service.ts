import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assessments } from '../interfaces/assessments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetassessmentsService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'X-Token': localStorage.getItem('X-Token') || '',
  });
  getGrade(): Observable<Assessments> {
   return this.http.get<Assessments>('https://user-assessment-api.vercel.app/api/userassessments', {headers: this.headers})
  }
}
