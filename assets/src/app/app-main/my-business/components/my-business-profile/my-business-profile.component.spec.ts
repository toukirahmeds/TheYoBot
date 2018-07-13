import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBusinessProfileComponent } from './my-business-profile.component';

describe('MyBusinessProfileComponent', () => {
  let component: MyBusinessProfileComponent;
  let fixture: ComponentFixture<MyBusinessProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBusinessProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBusinessProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
