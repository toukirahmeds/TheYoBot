import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DataSearchComponent } from './components/data-search/data-search.component';
import { 
  MatTableModule, 
  MatInputModule, 
  MatButtonModule, 
  MatCheckboxModule,
  MatIconModule,
  MatSidenavModule,
  MatFormFieldModule
} from '@angular/material';

import {  FlexLayoutModule } from '@angular/flex-layout';

import { DataTableModule  } from '../data-table';


@NgModule({
	imports:[
		CommonModule,
		MatTableModule, 
		MatInputModule, 
		MatButtonModule, 
		MatCheckboxModule,
		MatIconModule,
		MatSidenavModule,
		MatFormFieldModule,
		FlexLayoutModule,
		DataTableModule
	],
	declarations : [DataSearchComponent],
	exports : [DataSearchComponent],
	providers : []
})
export class DataSearchModule{}


