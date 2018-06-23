import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotConversationInformationComponent } from './bot-conversation-information.component';

describe('BotConversationInformationComponent', () => {
  let component: BotConversationInformationComponent;
  let fixture: ComponentFixture<BotConversationInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotConversationInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotConversationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
