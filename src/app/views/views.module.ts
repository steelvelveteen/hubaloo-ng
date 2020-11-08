import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
    declarations: [
        LandingComponent
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
        LandingComponent
    ]
})
export class ViewsModule { }
