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
    console.log(sessionStorage.getItem('authenticatedUser'));
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
  

  logOut() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
