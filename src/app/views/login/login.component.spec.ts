import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { TempAuthService } from '../../services/temp-auth.service';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let tempAuthService: TempAuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule],
      providers: [TempAuthService]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    tempAuthService = TestBed.inject(TempAuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "/profiles" if authenticated', () => {
    spyOn(tempAuthService, 'authenticate').and.returnValue(true);
    spyOn(router, 'navigate');

    component.username = 'testing';
    component.password = 'testing';
    component.handleLogin();

    expect(tempAuthService.authenticate).toHaveBeenCalledWith('testing', 'testing');
    expect(router.navigate).toHaveBeenCalledWith(['/profiles']);
    expect(component.invalidLogin).toBeFalse();
  });

  it('should set invalidLogin to true if not authenticated', () => {
    spyOn(tempAuthService, 'authenticate').and.returnValue(false);
    spyOn(router, 'navigate');

    component.username = 'testing';
    component.password = 'testing';
    component.handleLogin();

    expect(tempAuthService.authenticate).toHaveBeenCalledWith('testing', 'testing');
    expect(router.navigate).not.toHaveBeenCalled();
    expect(component.invalidLogin).toBeTrue();
  });

  it('should return true if username and password are "testing"', () => {
    component.username = 'testing';
    component.password = 'testing';
    const result = component.isLoginValid();
    expect(result).toBeTrue();
  });

  it('should return false if username is not "testing"', () => {
    component.username = 'invalid';
    component.password = 'testing';
    const result = component.isLoginValid();
    expect(result).toBeFalse();
  });

  it('should return false if password is not "testing"', () => {
    component.username = 'testing';
    component.password = 'invalid';
    const result = component.isLoginValid();
    expect(result).toBeFalse();
  });
});