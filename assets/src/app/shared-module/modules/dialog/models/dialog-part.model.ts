import { TemplateRef } from "@angular/core";
export class DialogPart{
	public template? : TemplateRef<any>;
	public title? : string;
	public onCancel? : Function;
	public onConfirm? : Function;
	constructor(){}
}