import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


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

/*=============================================
=            Defination of routes            =
=============================================*/
const appRoutes : Routes = [{
  path : '',
  loadChildren : './auth/auth.module#AuthModule'
},{
  path : 'my-profile',
  loadChildren : './my-profile/my-profile.module#MyProfileModule'
},{
  path : 'analytics',
  loadChildren : './analytics/analytics.module#AnalyticsModule'
},{
  path : 'messenger-conversation',
  loadChildren : './messenger-conversation/messenger-conversation.module#MessengerConversationModule'
},{
  path : 'post-conversation',
  loadChildren : './post-conversation/post-conversation.module#PostConversationModule'
},{
  path : 'broadcast',
  loadChildren : './broadcast/broadcast.module#BroadcastModule'
}];


/*=====  End of Defination of routes  ======*/


@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(appRoutes),
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
