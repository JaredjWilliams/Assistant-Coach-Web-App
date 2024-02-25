import { TestBed } from '@angular/core/testing';

import { TempAuthService } from './temp-auth.service';
import { AUTHENTICATED_USER } from '../app.constants';

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
    sessionStorage.setItem(AUTHENTICATED_USER, 'testing');
    const result = service.isUserLoggedIn();
    expect(result).toBe(true);
  });

  it('should check if a user is not logged in', () => {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    const result = service.isUserLoggedIn();
    expect(result).toBe(false);
  });

  it('should log out a user', () => {
    sessionStorage.setItem(AUTHENTICATED_USER, 'testing');
    service.logOut();
    const result = service.isUserLoggedIn();
    expect(result).toBe(false);
  });
});