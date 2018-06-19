import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { PostConversationMainComponent } from './components/post-conversation-main/post-conversation-main.component';


import { PostConversationFERoutes } from '../configs';

/*============================================
=            Defination of Routes            =
============================================*/
const appRoutes : Routes = [{
	path : PostConversationFERoutes.postConversationFlow,
	component : PostConversationMainComponent
}];


/*=====  End of Defination of Routes  ======*/



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [PostConversationMainComponent]
})
export class PostConversationModule { }
