import { Component, OnInit, Input, Output, TemplateRef, EventEmitter } from '@angular/core';
import { DialogPart } from "../../models/dialog-part.model";
@Component({
  selector: 'app-dialog-footer',
  templateUrl: './dialog-footer.component.html',
  styleUrls: ['./dialog-footer.component.css']
})
export class DialogFooterComponent implements OnInit {
	@Input() data : DialogPart;
	@Output() cancelled : EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() confirmed : EventEmitter<boolean> = new EventEmitter<boolean>();
	constructor() {}

	ngOnInit() {}

	onConfirm(){
	   this.confirmed.emit(true);
	}

	onCancel(){
		this.cancelled.emit(true);
	}

  

}
