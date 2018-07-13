import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyVisitorsChartComponent } from './daily-visitors-chart.component';

describe('DailyVisitorsChartComponent', () => {
  let component: DailyVisitorsChartComponent;
  let fixture: ComponentFixture<DailyVisitorsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyVisitorsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyVisitorsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
