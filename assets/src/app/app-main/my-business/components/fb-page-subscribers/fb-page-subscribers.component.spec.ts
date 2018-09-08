import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbPageSubscribersComponent } from './fb-page-subscribers.component';

describe('FbPageSubscribersComponent', () => {
  let component: FbPageSubscribersComponent;
  let fixture: ComponentFixture<FbPageSubscribersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbPageSubscribersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbPageSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
