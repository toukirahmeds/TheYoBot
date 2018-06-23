import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotConversationShopComponent } from './bot-conversation-shop.component';

describe('BotConversationShopComponent', () => {
  let component: BotConversationShopComponent;
  let fixture: ComponentFixture<BotConversationShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotConversationShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotConversationShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
