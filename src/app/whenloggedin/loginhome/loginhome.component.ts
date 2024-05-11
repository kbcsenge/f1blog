import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map, Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Bloggers} from "../../modell/Bloggers";

@Component({
  selector: 'app-loginhome',
  templateUrl: './loginhome.component.html',
  styleUrl: './loginhome.component.scss'
})
export class LoginhomeComponent implements OnInit{
  blogger$?: Observable<Bloggers>;

  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    this.auth.user.subscribe(user => {
      if (user) {
        console.log(user)
        this.blogger$ = this.firestore.collection('Bloggers', ref => ref.where('email', '==', user.email)).valueChanges().pipe(
          map((bloggers: any) => bloggers[0] as Bloggers)
        );
      }
    });
  }

  createNewPost(){
    this.router.navigate(['/new']);
  }

  editPost(){
    this.router.navigate(['/edit']);
  }

}
