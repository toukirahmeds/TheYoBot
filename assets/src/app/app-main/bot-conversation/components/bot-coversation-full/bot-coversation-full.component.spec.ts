import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotCoversationFullComponent } from './bot-coversation-full.component';

describe('BotCoversationFullComponent', () => {
  let component: BotCoversationFullComponent;
  let fixture: ComponentFixture<BotCoversationFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotCoversationFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotCoversationFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
