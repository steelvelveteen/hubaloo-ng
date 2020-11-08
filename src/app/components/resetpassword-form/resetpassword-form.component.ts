import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'resetpassword-form',
  templateUrl: './resetpassword-form.component.html',
  styleUrls: ['./resetpassword-form.component.scss']
})
export class ResetpasswordFormComponent implements OnInit {

  @Output() toggleLogin = new EventEmitter();

  resetPasswordForm: FormGroup;
  returnToLoginPromptText = 'Back to Login';
  constructor() { }

  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup({
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      newPasswordFormControl: new FormControl('', [
        Validators.required
      ]),
      confirmNewPasswordFormControl: new FormControl('', [
        Validators.required
      ]),
    });
  }

  resetPassword(): void {
    console.log(this.resetPasswordForm.value);
  }

  toggleLoginMode(): void {
    this.toggleLogin.emit();
  }
}
