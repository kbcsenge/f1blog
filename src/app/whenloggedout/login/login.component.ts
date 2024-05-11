import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  constructor(private router: Router,  private auth: AuthenticationService) {
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

 login() {
    if (this.loginForm.get('email')?.value && this.loginForm.get('password')?.value){
      this.auth.login(this.loginForm.get('email')?.value as string, this.loginForm.get('password')?.value as string).then(() => {
        this.router.navigateByUrl('/home');
      }).catch( () => {
        alert("Hibás e-mail cím vagy jelszó!");
      });
    }else{
      alert("Hiányzó értékek!")
    }
  }
}
