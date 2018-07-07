import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../shared-module';

import { TemplateBERoutes } from '../../configs';


@Injectable()
export class TemplateService{
	constructor(
		private httpService : HttpService
	){

	}

	createTemplate(templateInfo : any):Observable<any>{
		return this.httpService.sendRequest(HttpService.POST, TemplateBERoutes.create, templateInfo);
	}

	getTemplateList(searchParams : any):Observable<any>{
		return this.httpService.sendRequest(HttpService.GET, TemplateBERoutes.list, searchParams);
	}

	updateTemplate(templateInfo : any):Observable<any>{
		return this.httpService.sendRequest(HttpService.PUT, TemplateBERoutes.update, templateInfo);
	}

	deleteTemplate(templateId : any):Observable<any>{
		return this.httpService.sendRequest(HttpService.DELETE, TemplateBERoutes.delete + "/" + templateId, {});
	}
}