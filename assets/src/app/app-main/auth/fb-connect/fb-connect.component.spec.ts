import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbConnectComponent } from './fb-connect.component';

describe('FbConnectComponent', () => {
  let component: FbConnectComponent;
  let fixture: ComponentFixture<FbConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
