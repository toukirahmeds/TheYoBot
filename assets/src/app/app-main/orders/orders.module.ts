import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OrderFERoutes } from '../configs';

import { PendingOrdersComponent } from './components/pending-orders/pending-orders.component';
import { CompletedOrdersComponent } from './components/completed-orders/completed-orders.component';
import { OrderListComponent } from './components/order-list/order-list.component';

/*=============================================
=            Declaration of routes            =
=============================================*/
const appRoutes : Routes = [{
	path : OrderFERoutes.orderList,
	component : OrderListComponent
}]


/*=====  End of Declaration of routes  ======*/



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [PendingOrdersComponent, CompletedOrdersComponent, OrderListComponent]
})
export class OrdersModule { }
