
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { HttpInterceptorService } from './http-interceptor.service';
import { TempAuthService } from '../temp-auth.service';

describe('HttpInterceptorService', () => {
  let service: HttpInterceptorService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpInterceptorService,
        TempAuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpInterceptorService,
          multi: true
        }
      ]
    });
    service = TestBed.inject(HttpInterceptorService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add authorization header to the request if user is authenticated', () => {
    const token = 'dummyToken';
    const username = 'dummyUser';
    spyOn(service['tempAuthService'], 'getAuthenticatedToken').and.returnValue(token);
    spyOn(service['tempAuthService'], 'getAuthenticatedUser').and.returnValue(username);

    httpClient.get('/api/data').subscribe();

    const httpRequest = httpMock.expectOne('/api/data');
    expect(httpRequest.request.headers.has('Authorization')).toBeTruthy();
    expect(httpRequest.request.headers.get('Authorization')).toBe(token);
  });

  it('should not add authorization header to the request if user is not authenticated', () => {
    spyOn(service['tempAuthService'], 'getAuthenticatedToken').and.returnValue(null);
    spyOn(service['tempAuthService'], 'getAuthenticatedUser').and.returnValue(null);

    httpClient.get('/api/data').subscribe();

    const httpRequest = httpMock.expectOne('/api/data');
    expect(httpRequest.request.headers.has('Authorization')).toBeFalsy();
  });
});