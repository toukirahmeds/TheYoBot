import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from  '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatIconModule, 
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';

import { AuthGuardService } from '../services/auth-guard.service';
import {MyBusinessFERoutes} from '../configs';

import { DialogModule } from '../shared-module';

import {  FlexLayoutModule } from '@angular/flex-layout';

import { DataSearchModule } from '../shared-module';



import { MyBusinessProfileComponent } from './components/my-business-profile/my-business-profile.component';
import { MyBusinessService } from './services/my-business.service';
import { FbPageSubscribersComponent } from './components/fb-page-subscribers/fb-page-subscribers.component';
import { CustomersComponent } from './components/customers/customers.component';

/*=============================================
=            Declaration of routes            =
=============================================*/
const appRoutes : Routes = [{
	"path" : MyBusinessFERoutes.profile,
	"component" : MyBusinessProfileComponent,
  canActivate : [AuthGuardService],
  data : { "full" : false }
},{
  "path" : MyBusinessFERoutes.fbPageSubscribers,
  "component" : FbPageSubscribersComponent,
  canActivate : [AuthGuardService],
  data : { "full" : false }
},{
  "path" : MyBusinessFERoutes.customers,
  "component" : CustomersComponent,
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
    MatIconModule, 
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule,
    DialogModule,
    DataSearchModule
  ],
  declarations: [MyBusinessProfileComponent, FbPageSubscribersComponent, CustomersComponent],
  providers : [MyBusinessService]
})
export class MyBusinessModule { }
