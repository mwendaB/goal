import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
