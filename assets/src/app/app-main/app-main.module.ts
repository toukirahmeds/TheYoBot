import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/*=========================================
=            Import of modules            =
=========================================*/
import {SharedModuleModule} from "./shared-module/shared-module.module";
import {AuthModule} from "./auth/auth.module";
import {AutomationModule} from "./automation/automation.module";
import {MessageTemplateModule} from "./message-template/message-template.module";
import {MessengerConversationModule} from "./messenger-conversation/messenger-conversation.module";
import {PostConversationModule} from "./post-conversation/post-conversation.module";
import {BroadcastModule} from "./broadcast/broadcast.module";


/*=====  End of Import of modules  ======*/

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    AuthModule,
    AutomationModule,
    MessageTemplateModule,
    MessengerConversationModule,
    PostConversationModule,
    BroadcastModule
  ],
  declarations: [],
  exports : []
})
export class AppMainModule { }
