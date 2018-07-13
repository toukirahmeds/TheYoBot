import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProductsMonthlySalesComponent } from './top-products-monthly-sales.component';

describe('TopProductsMonthlySalesComponent', () => {
  let component: TopProductsMonthlySalesComponent;
  let fixture: ComponentFixture<TopProductsMonthlySalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopProductsMonthlySalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopProductsMonthlySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
