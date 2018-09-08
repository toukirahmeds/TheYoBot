import { Injectable } from '@angular/core';
import { HttpService, CacheService} from '../../shared-module';
import { PageInfoKey, ServiceBERoutes } from '../../configs';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BSService {
	private static pageInfo : any = {};
	constructor(
		private httpService : HttpService,
		private cacheService : CacheService
	){
		BSService.pageInfo = this.cacheService.get(PageInfoKey);
		console.log(BSService.pageInfo)
	}

	getServiceList():Observable<any>{
		return this.httpService.sendRequest(HttpService.GET, ServiceBERoutes.list + "/" + BSService.pageInfo._id, {});
	}

	getService(serviceId):Observable<any>{
		return this.httpService.sendRequest(HttpService.GET, ServiceBERoutes.details + "/" + BSService.pageInfo._id + "/" + serviceId, {});
	}

	createService(serviceInfo : any) : Observable<any>{
		serviceInfo["page"] = BSService.pageInfo._id;
		return this.httpService.sendRequest(HttpService.POST, ServiceBERoutes.create, serviceInfo);
	}
	updateService(serviceInfo : any) : Observable<any>{
		return this.httpService.sendRequest(HttpService.PUT, ServiceBERoutes.update + "/" + BSService.pageInfo._id + "/" + serviceInfo._id, serviceInfo);
	}
	deleteService(serviceId : string) : Observable<any>{
		return this.httpService.sendRequest(HttpService.DELETE, ServiceBERoutes.delete + "/" + BSService.pageInfo._id + "/" + serviceId, {});
	}
}