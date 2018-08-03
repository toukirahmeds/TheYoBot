import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideOptionComponent } from './side-option.component';

describe('SideOptionComponent', () => {
  let component: SideOptionComponent;
  let fixture: ComponentFixture<SideOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
