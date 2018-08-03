import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { DataTableComponent } from './components/data-table/data-table.component';



@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  declarations: [DataTableComponent],
  exports : [DataTableComponent]
})
export class DataTableModule { }
