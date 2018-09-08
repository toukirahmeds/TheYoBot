import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-search',
  templateUrl: './data-search.component.html',
  styleUrls: ['./data-search.component.scss']
})
export class DataSearchComponent implements OnInit {
	@Input('tableColumns') public tableColumns : string[] = [];
	@Input('tableData') public tableData : any;
	@Input('addButtonTitle') public addButtonTitle : string = "";
	@Output('addButtonClicked') public addButtonClicked : EventEmitter<any> = new EventEmitter<any>();
  	@Output('tableRowClicked') public tableRowClicked : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  addButtonClickTrigger(){
  	this.addButtonClicked.emit();
  }

  rowClickTrigger(rowData : any){
    console.log(rowData);
  	this.tableRowClicked.emit(rowData);
  }

}
