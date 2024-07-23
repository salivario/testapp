import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAnswer } from '../interfaces/user-answer';
import { UserForm } from '../interfaces/user-form';
import { Store } from '@ngrx/store';
import { Role } from '../interfaces/role';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private store: Store<any>, private route: Router) { }
  
  user!: UserAnswer;
  

  logIn(form:UserForm){
    this.http.post<UserAnswer>('https://user-assessment-api.vercel.app/api/login', form).subscribe(
      (response)=>{
        localStorage.setItem('X-Token', response.token)
        this.store.dispatch({type: response.role})
        this.store.dispatch({type: 'Login'})
        if(localStorage.getItem('X-Token')){
          this.route.navigate(['/assessments'])
        }
        return this.user = response;
      }
    )
  }
}
