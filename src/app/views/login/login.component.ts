import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TempAuthService } from '../../services/temp-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router : Router,
    private tempAuthService : TempAuthService
  ) {}
 
  errorMessage : string = "Please enter a valid username and password."
  invalidLogin : boolean = false
  username : string = ""
  password : string = ""

   
  handleLogin() {
    if (this.isAuthenticated()) {
      this.router.navigate(["/profiles"]);
    } else {
      this.invalidLogin = true;
    }
  }

  isAuthenticated() {
    return this.tempAuthService.authenticate(this.username, this.password);
  }
 

  isLoginValid() : boolean {
    return this.username == "testing" && this.password === "testing";
  }

}
