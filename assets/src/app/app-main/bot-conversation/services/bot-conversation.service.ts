import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BottomSheetService, DialogService } from '../../shared-module';
import { AutomationService } from '../../automation';
import { FBMessengerType, FBPostType } from '../../data/automation.types';

@Injectable()
export class BotConversationService{
	private static parentInfo : any = {};
	constructor(
		private bottomSheetService : BottomSheetService,
		private dialogService : DialogService,
		private automationService  : AutomationService
	){

	}

	setParentInfo(parentInfo : any):void{
		BotConversationService.parentInfo = parentInfo;
	}

	getParentInfo():any{
		return BotConversationService.parentInfo;
	}


	openBottomSheet(config? : any){
		this.bottomSheetService.open(config);
	}

	closeBottomSheet(){
		this.bottomSheetService.close();
	}


	openAutomationModal(modalConfigs : any){
		this.dialogService.openModal(modalConfigs);
	}

	getAutomationList(conversationType : string):Observable<any>{
		return this.automationService.getAutomationList(conversationType, this.getParentInfo()._id, {});
	}

	private createAutomation():Observable<any>{
		return this.automationService.createAutomation({});
	}

	private updateAutomation(): Observable<any>{
		return this.automationService.updateAutomation({});
	}

	deleteAutomation():Observable<any>{
		return this.automationService.deleteAutomation({});
	}



}