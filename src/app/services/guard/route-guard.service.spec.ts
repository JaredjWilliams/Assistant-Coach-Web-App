
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouteGuardService } from './route-guard.service';
import { TempAuthService } from '../temp-auth.service';
import { Router, RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

describe('RouteGuardService', () => {
  let service: RouteGuardService;
  let tempAuthService: TempAuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [TempAuthService],
    });
    service = TestBed.inject(RouteGuardService);
    tempAuthService = TestBed.inject(TempAuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should allow access if user is logged in', () => {
    spyOn(tempAuthService, 'isUserLoggedIn').and.returnValue(true);
    const snapshot: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const state: RouterStateSnapshot = {} as RouterStateSnapshot;
    const canActivate = service.canActivate(snapshot, state);
    expect(canActivate).toBe(true);
  });

  it('should navigate to login page if user is not logged in', () => {
    spyOn(tempAuthService, 'isUserLoggedIn').and.returnValue(false);
    spyOn(router, 'navigate');
    const snapshot: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const state: RouterStateSnapshot = {} as RouterStateSnapshot;
    const canActivate = service.canActivate(snapshot, state);
    expect(canActivate).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});