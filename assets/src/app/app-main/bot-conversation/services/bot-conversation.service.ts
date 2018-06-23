import { Injectable } from '@angular/core';
import { BottomSheetService } from '../../shared-module';


@Injectable()
export class BotConversationService{
	constructor(
		private bottomSheetService : BottomSheetService
	){

	}


	openBottomSheet(config? : any){
		this.bottomSheetService.open(config);
	}

	closeBottomSheet(){
		this.bottomSheetService.close();
	}

}