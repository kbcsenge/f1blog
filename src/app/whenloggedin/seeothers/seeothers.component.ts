import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-seeothers',
  templateUrl: './seeothers.component.html',
  styleUrl: './seeothers.component.scss'
})
export class SeeothersComponent {
  constructor( private router: Router) {
  }

}
