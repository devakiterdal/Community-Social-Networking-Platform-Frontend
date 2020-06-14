import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentfeedComponent } from './contentfeed.component';

describe('ContentfeedComponent', () => {
  let component: ContentfeedComponent;
  let fixture: ComponentFixture<ContentfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
