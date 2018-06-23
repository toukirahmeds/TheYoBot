import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatBottomSheetModule } from '@angular/material';

import { BottomSheetMainComponent } from './components/bottom-sheet-main/bottom-sheet-main.component';
import { BottomSheetService } from './services/bottom-sheet.service';

@NgModule({
	imports : [
		CommonModule,
		MatBottomSheetModule
	],
	declarations : [ BottomSheetMainComponent ],
	exports : [],
	entryComponents : [ BottomSheetMainComponent ],
	providers : [ BottomSheetService ]
})
export class BottomSheetModule{}