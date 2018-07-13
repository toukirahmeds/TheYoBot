import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { FbPostConversationFERoutes } from '../configs';

/*=============================================
=            Declaration of routes            =
=============================================*/
const appRoutes : Routes = [{
	path : FbPostConversationFERoutes.postConversationFlow,
	component : PostConversationComponent
},{
	path : FbPostConversationFERoutes.postList,
	component : PostListComponent
}];


/*=====  End of Declaration of routes  ======*/


import { PostListComponent } from './components/post-list/post-list.component';
import { PostConversationComponent } from './components/post-conversation/post-conversation.component';
import { PostTriggersComponent } from './components/post-triggers/post-triggers.component';

import { FbPostService } from './services/fb-post.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [PostListComponent, PostConversationComponent, PostTriggersComponent],
  providers : [FbPostService]

})
export class FbPostModule { }
