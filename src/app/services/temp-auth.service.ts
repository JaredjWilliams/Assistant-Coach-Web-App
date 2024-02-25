import { Injectable } from '@angular/core';
import { AUTHENTICATED_USER } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TempAuthService {

  constructor() { }

  getAuthenticatedToken() {
    return this.getAuthenticatedUser() != null ? 
      sessionStorage.getItem(AUTHENTICATED_USER) : null;
  }

  authenticate(username : string, password : string) {
    if (this.isValid(username, password)) {
      sessionStorage.setItem(AUTHENTICATED_USER, username);
      return true;
    }

    return false;
  }

  isValid(username: string, password: string) : boolean {
    return username === "testing" && password === "testing";
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }
  

  logOut() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }
}
