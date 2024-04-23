import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./whenloggedout/home/home.component";
import {LoginComponent} from "./whenloggedout/login/login.component";
import {RegisterComponent} from "./whenloggedout/register/register.component";
import {LoginhomeComponent} from "./whenloggedin/loginhome/loginhome.component";
import {NewpostComponent} from "./whenloggedin/newpost/newpost.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: LoginhomeComponent },
  { path : 'new' , component: NewpostComponent},
  { path : '' , component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
