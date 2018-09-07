import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessServiceTableComponent } from './business-service-table.component';

describe('BusinessServiceTableComponent', () => {
  let component: BusinessServiceTableComponent;
  let fixture: ComponentFixture<BusinessServiceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessServiceTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessServiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
