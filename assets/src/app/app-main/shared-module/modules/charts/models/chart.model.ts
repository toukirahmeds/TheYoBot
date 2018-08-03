import { Dataset } from './dataset.model';
import { Color } from './color.model';
import { Option } from './option.model';


export class Chart{
	public chartType : string = "";
	public datasets : Dataset[] = [];
	public labels : string[] = [];
	public colors : Color[] = [];
	public options : Option = new Option();
}