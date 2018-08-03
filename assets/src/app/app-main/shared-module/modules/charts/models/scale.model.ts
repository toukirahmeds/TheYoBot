class GridLine{
	public display : boolean = true;
	public tickMarkLength : number = 0;
	constructor(){}
}

class Tick{
	public fontColor : string = "";
	public stepSize : number = 0;
	constructor(){}
}

export class Scale{
	public gridLines : GridLine = new GridLine();
	public ticks : Tick = new Tick();

	constructor(){}
}