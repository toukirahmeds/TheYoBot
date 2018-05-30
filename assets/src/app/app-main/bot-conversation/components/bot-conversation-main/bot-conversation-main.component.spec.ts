import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotConversationMainComponent } from './bot-conversation-main.component';

describe('BotConversationMainComponent', () => {
  let component: BotConversationMainComponent;
  let fixture: ComponentFixture<BotConversationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotConversationMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotConversationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
