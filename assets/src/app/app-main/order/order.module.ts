import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { DialogModule } from '../shared-module';
import { 
  MatInputModule, 
  MatButtonModule, 
  MatCheckboxModule,
  MatIconModule,
  MatFormFieldModule
} from '@angular/material';

import {  FlexLayoutModule } from '@angular/flex-layout';

import { DataSearchModule } from '../shared-module';

import { AuthGuardService } from '../services/auth-guard.service';

import { OrderFERoutes } from '../configs';

import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderService } from './services/order.service';



/*=============================================
=            Declaration of routes            =
=============================================*/
const appRoutes : Routes = [{
	path : OrderFERoutes.orderList,
	component : OrderListComponent,
  	canActivate : [AuthGuardService],
  	data : { "full" : false }
}];


/*=====  End of Declaration of routes  ======*/

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatInputModule, 
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    DialogModule,
    FlexLayoutModule,
    DataSearchModule
  ],
  declarations: [OrderListComponent],
  providers : [OrderService]
})
export class OrderModule { }
