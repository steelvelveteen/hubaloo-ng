import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type CredentialsType = {
  email: string;
  password: string;
};

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;
  email: string;
  password: string;
  credentials: CredentialsType;

  constructor() { }

  ngOnInit(): void {
    this.credentials = {
      email: '',
      password: ''
    };
    this.loginForm = new FormGroup({
      emailFormControl: new FormControl('jeo9yviudojf'),
      passwordFormControl: new FormControl('')
    });
  }

  login(): void {
    console.log(this.loginForm);
  }

  setEmail(): void {

  }

  setPassword(): void {

  }
}
