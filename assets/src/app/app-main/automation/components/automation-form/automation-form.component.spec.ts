import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationFormComponent } from './automation-form.component';

describe('AutomationFormComponent', () => {
  let component: AutomationFormComponent;
  let fixture: ComponentFixture<AutomationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
