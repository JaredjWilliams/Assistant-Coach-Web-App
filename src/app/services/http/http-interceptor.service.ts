import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TempAuthService } from '../temp-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private tempAuthService: TempAuthService
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let authHeaderString = this.tempAuthService.getAuthenticatedToken();
    let username = this.tempAuthService.getAuthenticatedUser();

    if (authHeaderString && username) {
      req = req.clone({
        setHeaders: {
          Authorization: authHeaderString
        }
      });
    }

    return next.handle(req);
  }
}
