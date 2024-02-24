import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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