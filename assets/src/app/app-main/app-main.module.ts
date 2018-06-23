import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


/*========================================
=            Import of config            =
========================================*/

import { FrontendRoutes } from './configs';

/*=====  End of Import of config  ======*/

/*=========================================
=            Import of modules            =
=========================================*/
import {SharedModuleModule} from "./shared-module/shared-module.module";
import {AuthModule} from "./auth/auth.module";
import {AutomationModule} from "./automation/automation.module";
import {MessageTemplateModule} from "./message-template/message-template.module";
import {MessengerConversationModule} from "./messenger-conversation/messenger-conversation.module";
import {PostConversationModule} from "./post-conversation/post-conversation.module";
// import {BroadcastModule} from "./broadcast/broadcast.module";


/*=====  End of Import of modules  ======*/
// import { AppConfigurations } from './app-configurations';


/*=============================================
=            Defination of routes            =
=============================================*/

const appRoutes : Routes = [{
  path : FrontendRoutes.AuthFEUrl,
  loadChildren : './auth/auth.module#AuthModule'
},{
  path : FrontendRoutes.PageFEUrl,
  loadChildren : './page/page.module#PageModule'
},{
  path : FrontendRoutes.MyProfileFEUrl,
  loadChildren : './my-profile/my-profile.module#MyProfileModule'
},{
  path : FrontendRoutes.AnalyticsFEUrl,
  loadChildren : './analytics/analytics.module#AnalyticsModule'
},{
  path : FrontendRoutes.MessengerConversationFEUrl,
  loadChildren : './messenger-conversation/messenger-conversation.module#MessengerConversationModule'
},{
  path : FrontendRoutes.PostConversationFEUrl,
  loadChildren : './post-conversation/post-conversation.module#PostConversationModule'
},{
  path : FrontendRoutes.BroadcastFEUrl,
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
    PostConversationModule/*,
    BroadcastModule*/
  ],
  declarations: [],
  exports : []
})
export class AppMainModule { }
