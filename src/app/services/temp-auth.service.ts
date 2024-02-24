import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempAuthService {

  constructor() { }

  authenticate(username : string, password : string) {
    if (this.isValid(username, password)) {
      sessionStorage.setItem("authenticatedUser", username);
      return true;
    }

    return false;
  }

  isValid(username: string, password: string) : boolean {
    return username === "testing" && password === "testing";
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }
  

  logOut() {
    sessionStorage.removeItem('username');
  }
}
