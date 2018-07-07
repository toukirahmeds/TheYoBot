import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottomSheetModule } from '../shared-module';
import { MatListModule, MatLineModule } from '@angular/material';

import { DialogModule } from '../shared-module';

import { AutomationModule, AutomationService } from '../automation';


import { BotConversationMainComponent } from './components/bot-conversation-main/bot-conversation-main.component';
import { BotConversationService } from './services/bot-conversation.service';
import { VisTreeService } from './services/vis-tree.service';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    AutomationModule,
    BottomSheetModule,
    MatListModule,
    MatLineModule
  ],
  declarations: [BotConversationMainComponent],
  exports : [BotConversationMainComponent],
  providers : [VisTreeService, BotConversationService, AutomationService]
})
export class BotConversationModule { }
