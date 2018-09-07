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
	}

	getServiceList():Observable<any>{
		return this.httpService.sendRequest(HttpService.GET, ServiceBERoutes.list + "/" + BSService.pageInfo._id, {});
	}

	createService(serviceInfo : any) : Observable<any>{
		serviceInfo["page"] = BSService.pageInfo._id;
		return this.httpService.sendRequest(HttpService.POST, ServiceBERoutes.create, serviceInfo);
	}
	updateService(serviceInfo : any) : Observable<any>{
		return this.httpService.sendRequest(HttpService.PUT, ServiceBERoutes.update, serviceInfo);
	}
	deleteService(serviceId : string) : Observable<any>{
		return this.httpService.sendRequest(HttpService.DELETE, ServiceBERoutes.delete + "/" + serviceId, {});
	}
}