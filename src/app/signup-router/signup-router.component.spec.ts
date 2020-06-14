import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRouterComponent } from './signup-router.component';

describe('SignupRouterComponent', () => {
  let component: SignupRouterComponent;
  let fixture: ComponentFixture<SignupRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
