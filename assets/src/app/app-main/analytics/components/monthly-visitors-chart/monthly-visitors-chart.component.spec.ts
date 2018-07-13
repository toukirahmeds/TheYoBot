import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyVisitorsChartComponent } from './monthly-visitors-chart.component';

describe('MonthlyVisitorsChartComponent', () => {
  let component: MonthlyVisitorsChartComponent;
  let fixture: ComponentFixture<MonthlyVisitorsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyVisitorsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyVisitorsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
