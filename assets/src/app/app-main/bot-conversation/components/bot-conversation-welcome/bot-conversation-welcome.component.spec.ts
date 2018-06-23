import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotConversationWelcomeComponent } from './bot-conversation-welcome.component';

describe('BotConversationWelcomeComponent', () => {
  let component: BotConversationWelcomeComponent;
  let fixture: ComponentFixture<BotConversationWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotConversationWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotConversationWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
