import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomeTitleComponent } from './welcome-title/welcome-title.component';

@NgModule({
    declarations: [
        LoginFormComponent,
        WelcomeTitleComponent
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
        WelcomeTitleComponent
    ]
})
export class ComponentsModule { }
