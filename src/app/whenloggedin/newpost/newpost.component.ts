import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrl: './newpost.component.scss'
})
export class NewpostComponent {
  constructor( private router: Router) {
  }

  logout(){
    this.router.navigate(['/']);
  }
  goToHome(){
    this.router.navigate(['/home']);
  }

}
