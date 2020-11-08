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

  loginForm: FormGroup;
  signUpPromptText = 'Don\'t have an account?';
  passwordResetPromptText = 'Forgot your password?';
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
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required
      ])
    });
  }

  login(): void {
    console.log(this.loginForm.value);
  }

  setEmail(): void {

  }

  setPassword(): void {

  }
  toggleSignUpMode(): void {
    console.log('Toggle sign up mode clicked');

  }

  toggleResetPasswordMode(): void {
    console.log('Toggle reset password mode clicked');

  }
}
