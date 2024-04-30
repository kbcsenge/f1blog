import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.scss'
})
export class DriversComponent {
  constructor(private router: Router) {
  }

  verstappen(){
    this.router.navigate(['/verstappen'])
  }
  leclerc(){
    this.router.navigate(['/leclerc'])
  }

  sainz(){
    this.router.navigate(['/sainz'])
  }
  norris(){
    this.router.navigate(['/norris'])
  }
  hamilton(){
    this.router.navigate(['/hamilton'])
  }
  russell(){
    this.router.navigate(['/russell'])
  }
  perez(){
    this.router.navigate(['/perez'])
  }
  piastri(){
    this.router.navigate(['/piastri'])
  }
  ricciardo(){
    this.router.navigate(['/ricciardo'])
  }
  gasly(){
    this.router.navigate(['/gasly'])
  }
  ocon(){
    this.router.navigate(['/ocon'])
  }
  tsunoda(){
    this.router.navigate(['/tsunoda'])
  }
  magnussen(){
    this.router.navigate(['/magnussen'])
  }

  hulkenberg(){
    this.router.navigate(['/hulkenberg'])
  }

  sargeant(){
    this.router.navigate(['/sargeant'])
  }

  alonso() {
    this.router.navigate(['/alonso'])
  }

  albon(){
    this.router.navigate(['/albon'])
  }

  bottas(){
    this.router.navigate(['/bottas'])
  }

  zhou(){
    this.router.navigate(['/zhou'])
  }

  stroll(){
    this.router.navigate(['/stroll'])
  }
}
