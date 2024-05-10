import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrl: './newpost.component.scss'
})
export class NewpostComponent {
  constructor( private router: Router, private auth: AuthenticationService) {
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/']);
  }
  goToHome(){
    this.router.navigate(['/home']);
  }

}
