import {Component, OnInit, ViewChild, EventEmitter, Input, Output} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-data-table',
  styleUrls: ['./data-table.component.scss'],
  templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input('tableColumns') public  tableColumns : string[] = [];
  @Input('tableData') public  tableData  : EventEmitter<any>;
  @Output('rowClicked') public rowClicked : EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {
    this.tableData.subscribe((response)=>{
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  onRowClicked(event, row){
    console.log(event);
    console.log(row);
    this.rowClicked.emit(row);
  }


}
