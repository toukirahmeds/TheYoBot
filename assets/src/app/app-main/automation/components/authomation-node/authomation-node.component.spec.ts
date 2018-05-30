import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthomationNodeComponent } from './authomation-node.component';

describe('AuthomationNodeComponent', () => {
  let component: AuthomationNodeComponent;
  let fixture: ComponentFixture<AuthomationNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthomationNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthomationNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
