import { Injectable } from '@angular/core';
import { HttpService, CacheService } from '../../shared-module';
import { PageInfoKey, MyBusinessBERoutes, FbMessageSubscriberBERoutes, CustomerBERoutes } from '../../configs';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class MyBusinessService{
	private static businessInfo : any;
	private static fbPageInfo : any;

	constructor(
		private httpService : HttpService,
		private cacheService : CacheService
	){
		MyBusinessService.fbPageInfo  = this.cacheService.get(PageInfoKey);
	}


	getMyBusinessInfo() : Observable<any>{
		return this.httpService.sendRequest(HttpService.GET, MyBusinessBERoutes.details + "/" + MyBusinessService.fbPageInfo._id, {});
	}

	createMyBusinessInfo(){

	}

	updateMyBusinessInfo(updatedMyBusinessInfo : any): Observable<any>{
		return this.httpService.sendRequest(HttpService.PUT, MyBusinessBERoutes.update + "/" + updatedMyBusinessInfo._id, updatedMyBusinessInfo);
	}


	getFbPageSubscriberList():Observable<any>{
		return this.httpService.sendRequest(HttpService.GET, FbMessageSubscriberBERoutes.list + "/" + MyBusinessService.fbPageInfo._id, {});
	}

	getCustomerList(): Observable<any>{
		return this.httpService.sendRequest(HttpService.GET, CustomerBERoutes.list + "/" + MyBusinessService.fbPageInfo._id, {});
	}


}