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
  MatButtonModule
} from '@angular/material';

import { AuthGuardService } from '../services/auth-guard.service';


import {MyBusinessFERoutes} from '../configs';

import { MyBusinessProfileComponent } from './components/my-business-profile/my-business-profile.component';
import { MyBusinessService } from './services/my-business.service';

/*=============================================
=            Declaration of routes            =
=============================================*/
const appRoutes : Routes = [{
	"path" : MyBusinessFERoutes.profile,
	"component" : MyBusinessProfileComponent,
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
    MatButtonModule
  ],
  declarations: [MyBusinessProfileComponent],
  providers : [MyBusinessService]
})
export class MyBusinessModule { }
