import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InvoiceFERoutes } from '../configs';
import { AuthGuardService } from '../services/auth-guard.service';


import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceViewComponent } from './components/invoice-view/invoice-view.component';

/*=============================================
=            Declaration of routes            =
=============================================*/
const appRoutes : Routes = [{
	path : InvoiceFERoutes.invoiceList,
	component : InvoiceListComponent,
  	canActivate : [AuthGuardService],
  	data : { "full" : false }
}];


/*=====  End of Declaration of routes  ======*/


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [InvoiceListComponent, InvoiceViewComponent]
})
export class InvoiceModule { }
