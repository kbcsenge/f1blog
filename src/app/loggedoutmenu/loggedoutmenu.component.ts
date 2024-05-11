import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-loggedoutmenu',
  templateUrl: './loggedoutmenu.component.html',
  styleUrl: './loggedoutmenu.component.scss'
})
export class LoggedoutmenuComponent {
  constructor( private router: Router) {
  }
  goToHome(){
    this.router.navigate(['/']);
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }
}
