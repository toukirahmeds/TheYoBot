import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBusinessServiceLocationsComponent } from './my-business-service-locations.component';

describe('MyBusinessServiceLocationsComponent', () => {
  let component: MyBusinessServiceLocationsComponent;
  let fixture: ComponentFixture<MyBusinessServiceLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBusinessServiceLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBusinessServiceLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
