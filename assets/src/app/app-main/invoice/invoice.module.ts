import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InvoiceFERoutes } from '../configs';
import { AuthGuardService } from '../services/auth-guard.service';

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


import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceViewComponent } from './components/invoice-view/invoice-view.component';
import { InvoiceService } from './services/invoice.service';
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
    RouterModule.forChild(appRoutes),
    DialogModule,
    MatInputModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    FlexLayoutModule,
    DataSearchModule
  ],
  declarations: [InvoiceListComponent, InvoiceViewComponent],
  providers: [InvoiceService]
})
export class InvoiceModule { }
