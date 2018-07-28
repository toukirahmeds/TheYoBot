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
import {PageModule} from "./page/page.module";
import {MessengerConversationModule} from "./messenger-conversation/messenger-conversation.module";
import {FbPostModule} from './fb-post/fb-post.module';
import {MyProfileModule} from './my-profile/my-profile.module';
import {MyBusinessModule} from './my-business/my-business.module';
import {AnalyticsModule} from './analytics/analytics.module';
import {ProductModule} from './product/product.module';
import {OrdersModule} from './orders/orders.module';
import {InvoiceModule} from './invoice/invoice.module';
import { AppMainService } from './services/app-main.service';
import { FuseConfigChangeService } from './services/fuseConfig.service';



/*=====  End of Import of modules  ======*/


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
  path : FrontendRoutes.FBPostConversationFEUrl,
  loadChildren : './fb-post/fb-post.module#FbPostModule'
},{
  path : FrontendRoutes.MyBusinessFEUrl,
  loadChildren : './my-business/my-business.module#MyBusinessModule'
},{
  path : FrontendRoutes.ProductFEUrl,
  loadChildren : './product/product.module#ProductModule'
},{
  path : FrontendRoutes.OrderFEUrl,
  loadChildren : './orders/orders.module#OrdersModule'
},{
  path : FrontendRoutes.InvoiceFEUrl,
  loadChildren: './invoice/invoice.module#InvoiceModule'
}];


/*=====  End of Defination of routes  ======*/


@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(appRoutes),
    AuthModule,
    PageModule,
    MessengerConversationModule,
    FbPostModule,
    // MyProfileModule,
    AnalyticsModule,
    MyBusinessModule,
    ProductModule,
    OrdersModule,
    InvoiceModule
  ],
  declarations: [],
  providers : [ AppMainService, FuseConfigChangeService ],
  exports : [  ]
})
export class AppMainModule { }
