import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



import { MessengerConversationMainComponent } from './components/messenger-conversation-main/messenger-conversation-main.component';

/*============================================
=            Definition of routes            =
============================================*/
const appRoutes : Routes = [{
	path : '',
	component : MessengerConversationMainComponent
}];


/*=====  End of Definition of routes  ======*/



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [MessengerConversationMainComponent]
})
export class MessengerConversationModule { }
