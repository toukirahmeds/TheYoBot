import { Injectable } from '@angular/core';
import { BottomSheetMainComponent } from '../components/bottom-sheet-main/bottom-sheet-main.component';
import { MatBottomSheet } from "@angular/material";


@Injectable()
export class BottomSheetService{
	constructor(
		private bottomSheet : MatBottomSheet
	){}

	open(config? : any){
		this.bottomSheet.open(BottomSheetMainComponent, config);
	}

	close(){
		this.bottomSheet.dismiss();
	}
}