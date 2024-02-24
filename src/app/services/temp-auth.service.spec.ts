import { TestBed } from '@angular/core/testing';

import { TempAuthService } from './temp-auth.service';

describe('TempAuthService', () => {
  let service: TempAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should authenticate a valid user', () => {
    const username = 'testing';
    const password = 'testing';
    const result = service.authenticate(username, password);
    expect(result).toBe(true);
  });

  it('should not authenticate an invalid user', () => {
    const username = 'invalid';
    const password = 'invalid';
    const result = service.authenticate(username, password);
    expect(result).toBe(false);
  });

  it('should check if a user is logged in', () => {
    sessionStorage.setItem('username', 'testing');
    const result = service.isUserLoggedIn();
    expect(result).toBe(true);
  });

  it('should check if a user is not logged in', () => {
    sessionStorage.removeItem('username');
    const result = service.isUserLoggedIn();
    expect(result).toBe(false);
  });

  it('should log out a user', () => {
    sessionStorage.setItem('username', 'testing');
    service.logOut();
    const result = service.isUserLoggedIn();
    expect(result).toBe(false);
  });
});