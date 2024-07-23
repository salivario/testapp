import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit{
  constructor(private loginService: LoginService, private formBuilder: FormBuilder){}

  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')] ],
      password: ['', [Validators.required, Validators.minLength(1)]]
  
  })
  }

  submit(){
    if(localStorage.getItem('X-Token')){
      localStorage.removeItem('x-Token');
      console.log('rem')
    }
    this.loginService.logIn(this.form.value);

  }

}
