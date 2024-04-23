import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor( private router: Router) {
  }

  goToHome(){
    this.router.navigate(['/']);
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }
}
