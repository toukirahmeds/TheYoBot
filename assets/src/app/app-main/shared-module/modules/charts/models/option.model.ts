import { Layout } from './layout.model';
import { Element }  from './element.model';
import { Scale } from './scale.model';


export class Option{
	public spanGaps : boolean = false;
	public legend : {
		display : boolean
	} = {
		display : false
	};
	public maintainAspectRatio : boolean = false;
	public layout : Layout = new Layout();
	public elements : Element[] = [];
	public scales : {
		xAxes : Scale[],
		yAxes : Scale[]
	} = {
		xAxes : [new Scale()],
		yAxes : [new Scale()]
	};
	public plugins : {
		filler : {
			propagate : boolean
		}
	} = {
		filler : {
			propagate : false
		}
	};
	
	constructor(){}
}