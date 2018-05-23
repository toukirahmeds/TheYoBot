import {Injectable, EventEmitter} from "@angular/core";
import { DialogMainComponent, DialogRef } from "../components/dialog-main/dialog-main.component";
@Injectable()
export class DialogService{
	public headerEvent : EventEmitter<any> = new EventEmitter<any>();
	public bodyEvent : EventEmitter<any> = new EventEmitter<any>();
	public footerEvent : EventEmitter<any> = new EventEmitter<any>();
	constructor(private dialog : DialogRef){}
	getHeaderEvent(){
		return this.headerEvent;
	}

	emitHeaderEvent(data){
		this.headerEvent.emit(data);
	}


	getBodyEvent(){
		return this.bodyEvent;
	}

	emitBodyEvent(data){
		this.bodyEvent.emit(data);
	}

	getFooterEvent(){
		return this.footerEvent;
	}

	emitFooterEvent(data){
		this.footerEvent.emit(data);
	}

	openModal(data){
		this.dialog.open(DialogMainComponent, data);
	}

	closeAllModals(){
		this.dialog.closeAll();
	}
}