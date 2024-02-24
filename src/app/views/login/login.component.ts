import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router : Router,
  ) {}

  errorMessage : string = "Please enter a valid username and password."
  invalidLogin : boolean = false
  username : string = ""
  password : string = ""

  
  handleLogin() {
    if (this.isLoginValid()) {
      this.router.navigate(["/profiles"]);
    } else {
      this.invalidLogin = true;
    }
  }


  isLoginValid() : boolean {
    return this.username == "testing" && this.password === "testing";
  }
}
