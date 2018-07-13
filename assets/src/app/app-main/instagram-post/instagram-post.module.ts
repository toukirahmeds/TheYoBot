import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostConversationComponent } from './components/post-conversation/post-conversation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostListComponent, PostConversationComponent]
})
export class InstagramPostModule { }
