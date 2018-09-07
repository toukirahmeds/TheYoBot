import { Injectable } from '@angular/core';
import { HttpService, CacheService} from '../../shared-module';
import { OrderBERoutes, PageInfoKey } from '../../configs';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class OrderService{
	private static pageInfo : any = {};
	constructor(
		private httpService : HttpService,
		private cacheService : CacheService
	){
		OrderService.pageInfo = this.cacheService.get(PageInfoKey);
	}


	getOrderList() : Observable<any>{
		return this.httpService.sendRequest(HttpService.GET, OrderBERoutes.list + "/" + OrderService.pageInfo._id, {});
	}

	updateOrder(orderInfo : any) : Observable<any>{
		return this.httpService.sendRequest(HttpService.GET, OrderBERoutes.update, orderInfo);
	}

	deleteOrder(orderId : string) : Observable<any>{
		return this.httpService.sendRequest(HttpService.DELETE, OrderBERoutes.delete + "/" + orderId, {});
	}
}