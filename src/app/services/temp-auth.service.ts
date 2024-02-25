import { Injectable } from '@angular/core';
import { API_ROOT, AUTHENTICATED_USER, TOKEN } from '../app.constants';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempAuthService {

  constructor(
    private http : HttpClient
  ) { }

  executeJWTAuthenticationService(username : string, password : string) {
    return this.http.post<any>(`${API_ROOT}/authenticate`, {
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }

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
