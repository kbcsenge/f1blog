import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor( private router: Router) {
  }
  goToLogin(){
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/']);
  }
}
