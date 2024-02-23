import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorMessage : string = "Please enter a valid username and password."
  invalidLogin : boolean = true
  username : string = ""
  password : string = ""

}
