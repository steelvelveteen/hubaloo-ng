import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const material = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
