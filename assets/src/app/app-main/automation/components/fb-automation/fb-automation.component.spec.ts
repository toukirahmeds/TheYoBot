import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbAutomationComponent } from './fb-automation.component';

describe('FbAutomationComponent', () => {
  let component: FbAutomationComponent;
  let fixture: ComponentFixture<FbAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
