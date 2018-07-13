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


	initConversation():Observable<any>{
		return this.automationService.createWelcomeMessage(this.getParentInfo()._id);
	};

	createAutomation(automationInfo : any):Observable<any>{
		automationInfo["page"] = this.getParentInfo()._id;
		// console.log(automationInfo);
		if(automationInfo.template && !automationInfo.template.page){
			automationInfo.template.page = this.getParentInfo()._id;
		}
		// console.log(automationInfo);
		return this.automationService.createAutomation(automationInfo);
	}

	updateAutomation(automationInfo : any): Observable<any>{
		automationInfo["page"] = this.getParentInfo()._id;
		return this.automationService.updateAutomation(automationInfo);
	}

	deleteAutomation(automationId : string):Observable<any>{
		return this.automationService.deleteAutomation(automationId);
	}



}