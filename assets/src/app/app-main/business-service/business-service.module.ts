import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BusinessServiceTableComponent } from './components/business-service-table/business-service-table.component';
import { BSService } from './services/businessService.service';
import { DialogModule } from '../shared-module';
import { 
  MatInputModule, 
  MatButtonModule, 
  MatCheckboxModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule
} from '@angular/material';

import {  FlexLayoutModule } from '@angular/flex-layout';

import { DataSearchModule } from '../shared-module';

import { AuthGuardService } from '../services/auth-guard.service';

import { ServiceFERoutes } from '../configs';


/*=============================================
=            Declaration of routes            =
=============================================*/
const appRoutes : Routes = [{
	path : ServiceFERoutes.serviceList,
	component : BusinessServiceTableComponent,
  canActivate : [AuthGuardService],
  data : { "full" : false }
}];


/*=====  End of Declaration of routes  ======*/

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    MatInputModule, 
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    FlexLayoutModule,
    DataSearchModule
  ],
  declarations: [BusinessServiceTableComponent],
  providers : [BSService]
})
export class BusinessServiceModule { }
