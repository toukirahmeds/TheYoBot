import {Template } from './fb-messenger-template.model';


export class Automation{
	public _id : string = "";
	public page : any;
	public type : string = "fbMessenger";
	public trigger : {
		'triggerType' : string,
		'triggerKeywords' : string[]
	} = {
		'triggerType' : 'keyword',
		'triggerKeywords' : []
	};

	public template : Template = new Template();
	public position : number = 0;
	public previousPosition : number = 0;
	public previousAutomation : any;
	constructor(){

	}
}