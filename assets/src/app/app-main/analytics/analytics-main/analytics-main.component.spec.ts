import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsMainComponent } from './analytics-main.component';

describe('AnalyticsMainComponent', () => {
  let component: AnalyticsMainComponent;
  let fixture: ComponentFixture<AnalyticsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
