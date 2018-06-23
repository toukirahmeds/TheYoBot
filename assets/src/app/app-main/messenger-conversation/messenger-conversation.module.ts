import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BotConversationModule } from '../bot-conversation';


import { MessengerConversationMainComponent } from './components/messenger-conversation-main/messenger-conversation-main.component';

import { MessengerConversationService } from './services/messenger-conversation.service';

import { MessengerConversationFERoutes } from '../configs';


/*============================================
=            Definition of routes            =
============================================*/
const appRoutes : Routes = [{
	path : MessengerConversationFERoutes.messengerConversationFlow,
	component : MessengerConversationMainComponent
}];


/*=====  End of Definition of routes  ======*/



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    BotConversationModule
  ],
  declarations: [MessengerConversationMainComponent],
  providers : [MessengerConversationService]
})
export class MessengerConversationModule { }
