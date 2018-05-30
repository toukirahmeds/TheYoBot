import { Component, OnInit, Input, Output, TemplateRef, EventEmitter } from '@angular/core';
import { DialogPart } from "../../models/dialog-part.model";

@Component({
  selector: 'app-dialog-header',
  templateUrl: './dialog-header.component.html',
  styleUrls: ['./dialog-header.component.css']
})
export class DialogHeaderComponent implements OnInit{
	@Input() data : DialogPart;
	@Output() cancelled : EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() confirmed : EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {
  	console.log(this.data);
  }

  onConfirm(){
  	if(this.data.onConfirm) this.data.onConfirm();
  	if(this.confirmed) this.confirmed.emit(true);
  }

  onCancel(){
  	if(this.data.onCancel) this.data.onCancel();
  	if(this.cancelled) this.cancelled.emit(true);
  }

}
