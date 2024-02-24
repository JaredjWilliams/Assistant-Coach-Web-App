import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempAuthService {

  constructor() { }

  authenticate(username : string, password : string) {
    if (this.isValid(username, password)) {
      localStorage.setItem("username", username);
    }
  }

  private isValid(username: string, password: string) {
    return username === "testing" && password === "testing";
  }

  getAuthetication() {
    return localStorage.getItem("username");
  }


}
