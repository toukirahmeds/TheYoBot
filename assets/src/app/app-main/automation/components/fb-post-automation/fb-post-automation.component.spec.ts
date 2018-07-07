import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbPostAutomationComponent } from './fb-post-automation.component';

describe('FbPostAutomationComponent', () => {
  let component: FbPostAutomationComponent;
  let fixture: ComponentFixture<FbPostAutomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbPostAutomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbPostAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
