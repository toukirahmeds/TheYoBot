import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../shared-module';
import { TemplateBERoutes } from '../../configs';


@Injectable()
export class MessageTemplateService{
	constructor(
		private httpService : HttpService
	){

	}


	createTemplate(template:any){
		return this.httpService.sendRequest(HttpService.POST, TemplateBERoutes.create, template);
	}


	updateTemplate(template : any){
		return this.httpService.sendRequest(HttpService.PUT, TemplateBERoutes.update, template);
	}

	deleteTemplate(template : any){
		return this.httpService.sendRequest(HttpService.DELETE, TemplateBERoutes.delete, {});
	}
}