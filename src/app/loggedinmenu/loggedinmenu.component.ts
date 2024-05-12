import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-loggedinmenu',
  templateUrl: './loggedinmenu.component.html',
  styleUrl: './loggedinmenu.component.scss'
})
export class LoggedinmenuComponent {

  username: string = '';
  constructor( private router: Router, private auth: AuthenticationService) {
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/']);
  }
  goToHome(){
    this.router.navigate(['/home']);
  }

  searchOthers(username: string){
    this.username=username;
    this.router.navigate(['/seeothers', this.username]);
  }
}
