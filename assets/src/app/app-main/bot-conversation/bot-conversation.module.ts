import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottomSheetModule } from '../shared-module';
import { MatListModule, MatLineModule } from '@angular/material';


import { BotConversationMainComponent } from './components/bot-conversation-main/bot-conversation-main.component';
import { BotConversationService } from './services/bot-conversation.service';
import { VisTreeService } from './services/vis-tree.service';
import { BotCoversationFullComponent } from './components/bot-coversation-full/bot-coversation-full.component';
import { BotConversationWelcomeComponent } from './components/bot-conversation-welcome/bot-conversation-welcome.component';
import { BotConversationShopComponent } from './components/bot-conversation-shop/bot-conversation-shop.component';
import { BotConversationInformationComponent } from './components/bot-conversation-information/bot-conversation-information.component';
@NgModule({
  imports: [
    CommonModule,
    BottomSheetModule,
    MatListModule,
    MatLineModule
  ],
  declarations: [BotConversationMainComponent, BotCoversationFullComponent, BotConversationWelcomeComponent, BotConversationShopComponent, BotConversationInformationComponent],
  exports : [BotConversationMainComponent],
  providers : [VisTreeService, BotConversationService]
})
export class BotConversationModule { }
