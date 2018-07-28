import { Injectable } from '@angular/core';
import { HttpService, CacheService } from '../../shared-module';
import { PageInfoKey, MyBusinessBERoutes } from '../../configs';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class MyBusinessService{
	private static businessInfo : any;
	private static fbPageInfo : any;

	constructor(
		private httpService : HttpService,
		private cacheService : CacheService
	){}


	setPageInfo(){
		return MyBusinessService.fbPageInfo = this.cacheService.get(PageInfoKey);
	}

	getPageInfo(){
		if(MyBusinessService.fbPageInfo){
			return MyBusinessService.fbPageInfo;
		}else{
			return this.setPageInfo();
		}
	}


	getMyBusinessInfo() : Observable<any>{
		console.log(MyBusinessBERoutes.details + "/" + this.getPageInfo()._id);
		return this.httpService.sendRequest(HttpService.GET, MyBusinessBERoutes.details + "/" + this.getPageInfo()._id, {});
	}

	createMyBusinessInfo(){

	}

	updateMyBusinessInfo(updatedMyBusinessInfo : any): Observable<any>{
		return this.httpService.sendRequest(HttpService.PUT, MyBusinessBERoutes.update + "/" + updatedMyBusinessInfo._id, updatedMyBusinessInfo);
	}


}