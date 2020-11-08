import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ComponentsModule } from './components/components.module';
import { ViewsModule } from './views/views.module';
import { MainlayoutComponent } from './layouts/mainlayout/mainlayout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
