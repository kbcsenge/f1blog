import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./whenloggedout/home/home.component";
import {LoginComponent} from "./whenloggedout/login/login.component";
import {RegisterComponent} from "./whenloggedout/register/register.component";
import {LoginhomeComponent} from "./whenloggedin/loginhome/loginhome.component";
import {NewpostComponent} from "./whenloggedin/newpost/newpost.component";
import {AuthguardService} from "./services/authguard.service";
import {EditblogpostComponent} from "./whenloggedin/editblogpost/editblogpost.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: LoginhomeComponent, canActivate: [AuthguardService]},
  { path : 'new' , component: NewpostComponent, canActivate: [AuthguardService]},
  { path : 'edit' , component: EditblogpostComponent, canActivate: [AuthguardService]},
  { path : '' , component: HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
