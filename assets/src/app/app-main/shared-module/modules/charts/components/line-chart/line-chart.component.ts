import { Component, OnInit, Input } from '@angular/core';
import { Chart } from '../../models/chart.model';


class LineChart{
	public data : any[] = [];
	public view : any[] =[700,600];
	public showXAxis : boolean = true;
	public showYAxis : boolean = true;
	public gradient : boolean = false;
	public showLegend : boolean = true;
	public showXAxisLabel : boolean = true;
	public xAxisLabel : string = '';
	public showYAxisLabel : boolean = true;
	public yAxisLabel : string = '';
	public timeline : boolean = true;
	public colorScheme : {
		domain : any[]
	} = {
		domain : ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
	};
	public autoScale : boolean = true;
	constructor(){}
}


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
	@Input('config') public config : any;
	public lineChart : LineChart = new LineChart();
  constructor() { }

  ngOnInit() {
  	console.log("line chart module");
  	console.log(this.lineChart);
  	this.lineChart.data = [
  {
    name: 'Cyan',
    series: [
      {
        name: 5,
        value: 2650
      },
      {
        name: 10,
        value: 2800      },
      {
        name: 15,
        value: 2000
      }
    ]
  },
  {
    name: 'Yellow',
    series: [
      {
        name: 5,
        value: 2500
      },
      {
        name: 10,
        value: 3100
      },
      {
        name: 15,
        value: 2350
      }
    ]
  }
];
  }

  onSelect(event){}

}
