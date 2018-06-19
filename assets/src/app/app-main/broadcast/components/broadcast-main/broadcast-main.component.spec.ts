import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastMainComponent } from './broadcast-main.component';

describe('BroadcastMainComponent', () => {
  let component: BroadcastMainComponent;
  let fixture: ComponentFixture<BroadcastMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcastMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
