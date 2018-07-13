import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoPostConversationComponent } from './components/video-post-conversation/video-post-conversation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VideoListComponent, VideoPostConversationComponent]
})
export class YoutubeVideoModule { }
