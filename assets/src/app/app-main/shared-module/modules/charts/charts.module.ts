import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartModule, NgxChartsModule } from '@swimlane/ngx-charts';


import { LineChartComponent } from './components/line-chart/line-chart.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    LineChartModule
  ],
  declarations: [LineChartComponent],
  exports : [LineChartComponent]
})
export class ChartsModule { }
