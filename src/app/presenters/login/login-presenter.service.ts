import { Injectable } from '@angular/core';
import { TempAuthService } from '../../services/temp-auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginPresenterService {

  constructor(
    private tempAuthService: TempAuthService
  ) { }

  handleJWTAuthentication(username: string, password: string, onSuccess: () => void, onError: (error: any) => void) {
    this.tempAuthService.executeJWTAuthenticationService(username, password).subscribe({
      next: (data) => {
        console.log(data);
        onSuccess();
      },
      error: (error) => {
        console.log(error);
        onError(error);
      }
    })
  }
}
