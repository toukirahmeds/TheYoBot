import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { AnalyticsFERoutes } from '../configs';


import { MessengerComponent } from './messenger/messenger.component';
import { PostComponent } from './post/post.component';
import { AudienceComponent } from './audience/audience.component';
import { AnalyticsMainComponent } from './analytics-main/analytics-main.component';
import { DailyVisitorsChartComponent } from './components/daily-visitors-chart/daily-visitors-chart.component';
import { MonthlyVisitorsChartComponent } from './components/monthly-visitors-chart/monthly-visitors-chart.component';
import { MonthlySalesChartComponent } from './components/monthly-sales-chart/monthly-sales-chart.component';
import { MonthlyRevenueChartComponent } from './components/monthly-revenue-chart/monthly-revenue-chart.component';


/*============================================
=            Definition of Routes            =
============================================*/
const appRoutes : Routes = [{
	path : AnalyticsFERoutes.dailyVisitors,
	component : DailyVisitorsChartComponent
},{
	path : AnalyticsFERoutes.monthlyVisitors,
	component : MonthlyVisitorsChartComponent
},{
	path : AnalyticsFERoutes.monthlySalesChart,
	component : MonthlySalesChartComponent
},{
	path : AnalyticsFERoutes.monthlyRevenueChart,
	component : MonthlyRevenueChartComponent
}];


/*=====  End of Definition of Routes  ======*/


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [MessengerComponent, PostComponent, AudienceComponent, AnalyticsMainComponent, DailyVisitorsChartComponent, MonthlyVisitorsChartComponent, MonthlySalesChartComponent, MonthlyRevenueChartComponent]
})
export class AnalyticsModule { }
