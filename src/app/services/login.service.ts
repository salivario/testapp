import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAnswer } from '../interfaces/user-answer';
import { UserForm } from '../interfaces/user-form';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  user!: UserAnswer;
  

  logIn(form:UserForm){
    this.http.post<UserAnswer>('https://user-assessment-api.vercel.app/api/login', form).subscribe(
      (response)=>{
        localStorage.setItem('X-Token', response.token)
        return this.user = response;
      }
    )
  }
}
