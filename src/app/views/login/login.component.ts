import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signUpMode = false;
  loginMode = true;
  resetPasswordMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLoginMode(): void {
    this.loginMode = true;
    this.signUpMode = false;
    this.resetPasswordMode = false;
  }

  toggleSignUpMode(): void {
    console.log('Toggle sign up mode clicked');
    this.signUpMode = true;
    this.loginMode = false;
    this.resetPasswordMode = false;
  }

  toggleResetPasswordMode(): void {
    this.resetPasswordMode = true;
    this.signUpMode = false;
    this.loginMode = false;
  }
}
