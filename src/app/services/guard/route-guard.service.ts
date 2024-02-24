import { Injectable } from '@angular/core';
import { TempAuthService } from '../temp-auth.service';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(
    private tempAuthService : TempAuthService,
    private router : Router
  ) { }

  canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    if (this.tempAuthService.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(["/login"]);

    return false;
  }
}
