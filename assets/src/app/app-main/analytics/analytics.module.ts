import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';



import { MessengerComponent } from './messenger/messenger.component';
import { PostComponent } from './post/post.component';
import { AudienceComponent } from './audience/audience.component';
import { AnalyticsMainComponent } from './analytics-main/analytics-main.component';


/*============================================
=            Definition of Routes            =
============================================*/
const appRoutes : Routes = [{
	path : '',
	component : AnalyticsMainComponent
},{
	path : 'messenger',
	component : MessengerComponent
},{
	path : 'post',
	component : PostComponent
},{
	path : 'audience',
	component : AudienceComponent
}];


/*=====  End of Definition of Routes  ======*/


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [MessengerComponent, PostComponent, AudienceComponent, AnalyticsMainComponent]
})
export class AnalyticsModule { }
