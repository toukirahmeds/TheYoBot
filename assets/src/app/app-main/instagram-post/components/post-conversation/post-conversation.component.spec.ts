import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostConversationComponent } from './post-conversation.component';

describe('PostConversationComponent', () => {
  let component: PostConversationComponent;
  let fixture: ComponentFixture<PostConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
