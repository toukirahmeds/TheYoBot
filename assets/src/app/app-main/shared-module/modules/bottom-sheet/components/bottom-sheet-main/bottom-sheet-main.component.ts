import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef , MAT_BOTTOM_SHEET_DATA } from '@angular/material';


@Component({
	templateUrl : "./bottom-sheet-main.component.html",
	styleUrls : ["./bottom-sheet-main.component.scss"]
})
export class BottomSheetMainComponent implements OnInit{
	constructor(
		private bottomSheetRef : MatBottomSheetRef<BottomSheetMainComponent>,
		@Inject(MAT_BOTTOM_SHEET_DATA) public config : any
	){

	}

	ngOnInit(){
		
	}

	closeCallback(){

	}

	close(){
		this.bottomSheetRef.dismiss();
	}
}