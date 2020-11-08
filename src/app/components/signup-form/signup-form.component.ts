import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  @Output() toggleLogin = new EventEmitter();

  signUpForm: FormGroup;
  loginPromptText = 'Already have an account?';

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required
      ]),
      confirmPasswordFormControl: new FormControl('', [
        Validators.required
      ])
    });
  }

  signUp(): void {
    console.log(this.signUpForm.value);
  }

  toggleLoginMode(): void {
    this.toggleLogin.emit();
  }
}
