import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from  '@angular/router';

import {MyBusinessFERoutes} from '../configs';

import { MyBusinessProfileComponent } from './components/my-business-profile/my-business-profile.component';
import { MyBusinessServiceLocationsComponent } from './components/my-business-service-locations/my-business-service-locations.component';

/*=============================================
=            Declaration of routes            =
=============================================*/
const appRoutes : Routes = [{
	"path" : MyBusinessFERoutes.profile,
	"component" : MyBusinessProfileComponent
},{
	"path" : MyBusinessFERoutes.serviceLocations,
	"component" : MyBusinessServiceLocationsComponent
}];


/*=====  End of Declaration of routes  ======*/



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)

  ],
  declarations: [MyBusinessProfileComponent, MyBusinessServiceLocationsComponent]
})
export class MyBusinessModule { }
