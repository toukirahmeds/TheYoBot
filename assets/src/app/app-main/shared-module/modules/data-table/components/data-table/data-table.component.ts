import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input('columnHeaders') columnHeaders : string[] = [];
  @Input('data') data : any[] = [];
  @Input('columnMode') columnMode : string = "standard"; 
  @Input('count') count : number = 0;
  @Input('externalPaging') externalPaging : boolean = false;
  @Input('externalSorting') externalSorting : boolean = false;
  @Input('footerHeight') footerHeight : string = "10px";
  @Input('messages') messages : any = {
  	'emptyMessage' : 'No data to display',
  	'totalMessage' : 'Total'
  };
  @Input('cssClasses') cssClasses : any = {
  	sortAscending: 'datatable-icon-down',
	sortDescending: 'datatable-icon-up',
	pagerLeftArrow: 'datatable-icon-left',
	pagerRightArrow: 'datatable-icon-right',
	pagerPrevious: 'datatable-icon-prev',
	pagerNext: 'datatable-icon-skip'
  };

  @Output('activate') activate : EventEmitter<any> = new EventEmitter<any>();



  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(){}

  activated(event){
  	console.log(event);
  }

  sorted(event){
  	console.log(event);
  }

  detailToggled(event){
  	console.log(event);
  }

  paged(event){
  	console.log(event);
  }

  resized(event){
  	console.log(event);
  }

  selected(event){
  	console.log(event);
  }



}
