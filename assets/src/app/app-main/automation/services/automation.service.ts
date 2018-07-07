import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../shared-module';
import { AutomationBERoutes } from '../../configs';

// import { FBMessengerType, FBPostType } from '../data/automation.types';


@Injectable()
export class AutomationService{
	constructor(private httpService : HttpService){}

	// getAutomationList()

	getAutomationList(automationType:string, pageId : string, searchParam : any){
		return this.httpService.sendRequest(HttpService.GET, AutomationBERoutes.list + "/" + pageId + "/" + automationType, searchParam);
	}

	createAutomation(automation:any):Observable<any>{
		return this.httpService.sendRequest(HttpService.POST, AutomationBERoutes.create, automation);
	}

	updateAutomation(automation:any):Observable<any>{
		return this.httpService.sendRequest(HttpService.PUT, AutomationBERoutes.update + "/" + automation._id, automation);
	}


	deleteAutomation(automation :any):Observable<any>{
		return this.httpService.sendRequest(HttpService.DELETE, AutomationBERoutes.delete + "/" + automation._id, automation);
	}

	createWelcomeMessage():Observable<any>{
		return this.httpService.sendRequest(HttpService.POST, AutomationBERoutes.create, {
			
		});
	}

	
}