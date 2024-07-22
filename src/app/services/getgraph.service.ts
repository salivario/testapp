import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Graph } from '../interfaces/graph';

@Injectable({
  providedIn: 'root'
})
export class GetgraphService {

  constructor(private http: HttpClient) { }
  getGraph(id:number): Observable<Graph>{
    const token = localStorage.getItem('X-Token');
    const headers = new HttpHeaders().set('X-Token', token || '');
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<any>('https://user-assessment-api.vercel.app/api/userassessments/graph', { headers, params });
  }

}
