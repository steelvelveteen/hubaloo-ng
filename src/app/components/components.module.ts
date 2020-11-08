import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomeTitleComponent } from './welcome-title/welcome-title.component';
import { PromptUnitComponent } from './prompt-unit/prompt-unit.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ResetpasswordFormComponent } from './resetpassword-form/resetpassword-form.component';

@NgModule({
    declarations: [
        LoginFormComponent,
        WelcomeTitleComponent,
        PromptUnitComponent,
        SignupFormComponent,
        ResetpasswordFormComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        LoginFormComponent,
        WelcomeTitleComponent,
        SignupFormComponent,
        ResetpasswordFormComponent
    ]
})
export class ComponentsModule { }
