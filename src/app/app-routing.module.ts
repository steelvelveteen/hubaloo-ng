import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainlayoutComponent } from './layouts/mainlayout/mainlayout.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'mainlayout', component: MainlayoutComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
