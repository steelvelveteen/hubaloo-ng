import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

type CredentialsType = {
  email: string;
  password: string;
};

type LoginResponseType = {
  message: string,
  user_id: string,
  email: string,
  token: string
};

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  @Output() toggleSignUp = new EventEmitter();
  @Output() toggleResetPassword = new EventEmitter();

  loginForm: FormGroup;
  signUpPromptText = 'Don\'t have an account?';
  passwordResetPromptText = 'Forgot your password?';
  email: string;
  password: string;
  credentials: CredentialsType;
  subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

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
    // console.log(this.loginForm.value);
    this.credentials.email = this.setEmail();
    this.credentials.password = this.setPassword();
    console.log(this.credentials);
    this.subscription = this.authService.Login(this.credentials).subscribe(
      (data: LoginResponseType) => {
        console.log(data.token);
        localStorage.setItem('token', JSON.stringify(data.token));
        this.router.navigateByUrl('mainlayout');
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  setEmail(): string {
    return this.loginForm.get('emailFormControl').value;
  }

  setPassword(): string {
    return this.loginForm.get('passwordFormControl').value;
  }

  toggleSignUpMode(): void {
    this.toggleSignUp.emit();
  }

  toggleResetPasswordMode(): void {
    this.toggleResetPassword.emit();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
