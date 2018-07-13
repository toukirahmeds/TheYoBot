import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { ProductFERoutes } from '../configs';



import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { TopProductsMonthlySalesComponent } from './components/top-products-monthly-sales/top-products-monthly-sales.component';


/*=============================================
=            Declaration of routes            =
=============================================*/
const appRoutes : Routes = [{
	path : ProductFERoutes.productList,
	component : ProductListComponent
},{
	path : ProductFERoutes.topProducts,
	component : TopProductsComponent
}];


/*=====  End of Declaration of routes  ======*/


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [ProductListComponent, ProductFormComponent, TopProductsComponent, TopProductsMonthlySalesComponent]
})
export class ProductModule { }
