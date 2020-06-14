import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRouterComponent } from './login-router.component';

describe('LoginRouterComponent', () => {
  let component: LoginRouterComponent;
  let fixture: ComponentFixture<LoginRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRouterComponent } from './login-router.component';

describe('LoginRouterComponent', () => {
  let component: LoginRouterComponent;
  let fixture: ComponentFixture<LoginRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
