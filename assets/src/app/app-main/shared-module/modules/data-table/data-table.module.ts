import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import './polyfills';

import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from '@angular/common/http';


import { DataTableComponent } from './components/data-table/data-table.component';
import { 
	MatTableModule, 
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatIconModule,
	MatSortModule,
	MatFormFieldModule,
	MatInputModule 
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
	MatInputModule 
    // NgxDatatableModule
  ],
  declarations: [DataTableComponent],
  exports : [DataTableComponent]
})
export class DataTableModule { }
