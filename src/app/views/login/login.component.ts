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

}
