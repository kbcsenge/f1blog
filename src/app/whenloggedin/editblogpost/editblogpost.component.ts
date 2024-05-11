import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-editblogpost',
  templateUrl: './editblogpost.component.html',
  styleUrl: './editblogpost.component.scss'
})
export class EditblogpostComponent {
  constructor( private router: Router) {
  }

  editPost = new FormGroup({
    title: new FormControl(''),
    picture: new FormControl(''),
    text: new FormControl(''),
  });

  save(){

  }


}
