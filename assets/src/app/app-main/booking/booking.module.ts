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

import { BookingFERoutes } from '../configs';


import { BookingListComponent } from './components/booking-list/booking-list.component';

import { BookingService } from './services/booking.service';


/*=============================================
=            Declaration of routes            =
=============================================*/
const appRoutes : Routes = [{
	path : BookingFERoutes.bookingList,
	component : BookingListComponent,
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
  declarations: [BookingListComponent],
  providers : [BookingService]
})
export class BookingModule { }
