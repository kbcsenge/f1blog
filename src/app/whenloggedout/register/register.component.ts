import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Bloggers} from "../../modell/Bloggers";
import {AuthenticationService} from "../../services/authentication.service";
import {BloggerService} from "../../services/blogger.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor( private router: Router, private auth: AuthenticationService, private bloggerService: BloggerService) {
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/']);
  }

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    username: new FormControl(''),
    fullname: new FormControl(''),
    favouritedriver: new FormControl(''),
  });


  onSubmit() {
    if (this.signUpForm.get('password')?.value === this.signUpForm.get('rePassword')?.value) {
      if (this.signUpForm.get('username')?.value && this.signUpForm.get('fullname')?.value
        && this.signUpForm.get('email')?.value && this.signUpForm.get('favouritedriver')?.value
        && this.signUpForm.get('password')?.value && this.signUpForm.get('repassword')?.value) {
        this.auth.signup(this.signUpForm.get('email')?.value as string, this.signUpForm.get('password')?.value as string).then((cred: any) => {
          const blogger: Bloggers = {
            username: this.signUpForm.get('username')?.value as string,
            fullname: this.signUpForm.get('fullname')?.value as string,
            favouritedriver: this.signUpForm.get('favouritedriver')?.value as string,
          };
          this.bloggerService.create(blogger).then(() => {
          }).catch((error: any) => {
            alert(error);
          })
        }).catch((error: any) => {
          alert(error);
        });
      } else {
        alert('hiányzó értékek!');
      }
    } else {
      alert('A jelszóértékek nem egyeznek');
    }
  }

}
