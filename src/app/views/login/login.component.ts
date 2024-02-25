import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TempAuthService } from '../../services/temp-auth.service';
import { LoginPresenterService } from '../../presenters/login/login-presenter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router : Router,
    private tempAuthService : TempAuthService,
    private loginPresenter : LoginPresenterService
  ) {}
 
  errorMessage : string = "Please enter a valid username and password."
  invalidLogin : boolean = false
  username : string = ""
  password : string = ""

   
  handleLogin() {
    this.loginPresenter.handleJWTAuthentication(
      this.username, this.password, this.onLoginSuccess.bind(this), this.onError.bind(this));


    // if (this.isAuthenticated()) {
    //   this.router.navigate(["/profiles"]);
    // } else {
    //   this.invalidLogin = true;
    // }
  }
  onError() {
    this.invalidLogin = true;
  }
  onLoginSuccess() {
    this.router.navigate(["/profiles"]);
    this.invalidLogin = false;
  }

  isAuthenticated() {
    return this.tempAuthService.authenticate(this.username, this.password);
  }
 

  isLoginValid() : boolean {
    return this.username == "testing" && this.password === "testing";
  }

}
