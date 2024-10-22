import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ProductFERoutes } from '../configs';

import { ProductService } from './services/product.service';



import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { TopProductsMonthlySalesComponent } from './components/top-products-monthly-sales/top-products-monthly-sales.component';


/*=============================================
=            Declaration of routes            =
=============================================*/
const appRoutes : Routes = [{
	path : ProductFERoutes.productList,
	component : ProductListComponent,
  canActivate : [AuthGuardService],
  data : { "full" : false }
},{
	path : ProductFERoutes.topProducts,
	component : TopProductsComponent,
  canActivate : [AuthGuardService],
  data : { "full" : false }
}];


/*=====  End of Declaration of routes  ======*/


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    DialogModule,
    FlexLayoutModule,
    DataSearchModule
  ],
  declarations: [ProductListComponent, ProductFormComponent, TopProductsComponent, TopProductsMonthlySalesComponent],
  providers : [ProductService]
})
export class ProductModule { }
