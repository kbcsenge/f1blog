import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-loginhome',
  templateUrl: './loginhome.component.html',
  styleUrl: './loginhome.component.scss'
})
export class LoginhomeComponent {
  constructor( private router: Router) {
  }

  logout(){
    this.router.navigate(['/']);
  }

  createNewPost(){
    this.router.navigate(['/new']);
  }

}
