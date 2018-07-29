import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BotConversationModule } from '../bot-conversation';

import { AuthGuardService } from '../services/auth-guard.service';

import { MessengerConversationMainComponent } from './components/messenger-conversation-main/messenger-conversation-main.component';

import { MessengerConversationService } from './services/messenger-conversation.service';

import { MessengerConversationFERoutes } from '../configs';
import { PersistentMenuComponent } from './components/persistent-menu/persistent-menu.component';


/*============================================
=            Definition of routes            =
============================================*/
const appRoutes : Routes = [{
	path : MessengerConversationFERoutes.messengerConversationFlow,
	component : MessengerConversationMainComponent,
  canActivate : [AuthGuardService],
  data : { "full" : false }
},{
	path : MessengerConversationFERoutes.persistentMenu,
	component : PersistentMenuComponent,
  canActivate : [AuthGuardService],
  data : { "full" : false }
}];


/*=====  End of Definition of routes  ======*/



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    BotConversationModule
  ],
  declarations: [MessengerConversationMainComponent, PersistentMenuComponent],
  providers : [MessengerConversationService]
})
export class MessengerConversationModule { }
