import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerConversationMainComponent } from './messenger-conversation-main.component';

describe('MessengerConversationMainComponent', () => {
  let component: MessengerConversationMainComponent;
  let fixture: ComponentFixture<MessengerConversationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengerConversationMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerConversationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
