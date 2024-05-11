import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrl: './newpost.component.scss'
})
export class NewpostComponent {
  constructor( private router: Router) {
  }

  newPost = new FormGroup({
    title: new FormControl(''),
    picture: new FormControl(''),
    text: new FormControl(''),
  });

  save() {

  }

}
