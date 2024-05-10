import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  loggedInUser?: firebase.default.User | null;
  constructor(private auth: AuthenticationService){}
  title = 'f1blog';

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(user =>{
      this.loggedInUser=user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser))
    }, error  =>{
      console.log(error)
      localStorage.setItem('user',JSON.stringify('null'))
    });
  }
}
