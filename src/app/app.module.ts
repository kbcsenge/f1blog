import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './whenloggedout/home/home.component';
import { LoginComponent } from './whenloggedout/login/login.component';
import { RegisterComponent } from './whenloggedout/register/register.component';
import { LoginhomeComponent } from './whenloggedin/loginhome/loginhome.component';
import { NewpostComponent } from './whenloggedin/newpost/newpost.component';
import { SeeothersComponent } from './whenloggedin/seeothers/seeothers.component';
import {RouterModule} from "@angular/router";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import { DriversComponent } from './component/drivers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginhomeComponent,
    NewpostComponent,
    SeeothersComponent,
    DriversComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatFormField,
    MatFormFieldModule,
    MatIcon,
    MatInput,
    MatButton
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
