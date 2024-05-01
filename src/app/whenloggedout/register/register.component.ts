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
  constructor( private router: Router, private location: Location, private authService: AuthenticationService, private bloggerService: BloggerService) {
  }

  email = new FormControl('');
  password = new FormControl('');
  passwordagain = new FormControl('');
  goToLogin(){
    this.router.navigate(['/login']);
  }

  goToHome(){
    this.router.navigate(['/']);
  }

  register() {
    if (this.password.value===this.passwordagain.value) {
      this.router.navigateByUrl('/login');
    } else {
      console.error('Incorrect email or password!');
    }
  }


  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormControl('')
  });


  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.get('email')?.value as string, this.signUpForm.get('password')?.value as string).then((cred: any) => {
      console.log(cred);
      const blogger: Bloggers = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value as string,
        name: this.signUpForm.get('name')?.value as string
      };
      this.bloggerService.create(blogger).then( () => {
        console.log('User added successfully.');
      }).catch((error: any) => {
        console.error(error);
      })
    }).catch((error: any)=> {
      console.error(error);
    });
  }

}
