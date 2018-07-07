import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbMessengerAutomationComponent } from './fb-messenger-automation.component';

describe('FbMessengerAutomationComponent', () => {
  let component: FbMessengerAutomationComponent;
  let fixture: ComponentFixture<FbMessengerAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbMessengerAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbMessengerAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
