import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { PageListComponent } from './components/page-list/page-list.component';

import { PageService } from './services/page.service';

import { PageFERoutes } from '../configs';


const appRoutes : Routes = [{
	path : PageFERoutes.pageList,
	component : PageListComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [PageListComponent],
  providers : [ PageService ]
})
export class PageModule { }
