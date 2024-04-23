import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.scss'
})
export class DriversComponent {
  constructor( private router: Router) {
  }

  max() {
    this.router.navigate(['./drivers/maxverstappen.html']);
  }

}
