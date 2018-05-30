import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostConversationMainComponent } from './post-conversation-main.component';

describe('PostConversationMainComponent', () => {
  let component: PostConversationMainComponent;
  let fixture: ComponentFixture<PostConversationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostConversationMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostConversationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
