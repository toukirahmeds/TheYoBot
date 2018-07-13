import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPostConversationComponent } from './video-post-conversation.component';

describe('VideoPostConversationComponent', () => {
  let component: VideoPostConversationComponent;
  let fixture: ComponentFixture<VideoPostConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPostConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPostConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
