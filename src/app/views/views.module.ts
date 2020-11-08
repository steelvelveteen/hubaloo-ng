import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule
    ],
    exports: [
        LoginComponent
    ]
})
export class ViewsModule { }
