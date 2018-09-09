import { Injectable } from '@angular/core';

import { HttpService, CacheService } from '../../shared-module';
import { PageInfoKey, BookingBERoutes } from '../../configs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookingService{
	private static pageInfo : any = {};
	constructor(
		private httpService : HttpService,
		private cacheService : CacheService
	){
		BookingService.pageInfo = this.cacheService.get(PageInfoKey);
	}


	getBookingList(): Observable<any>{
		return this.httpService.sendRequest(HttpService.GET, BookingBERoutes.list + "/" + BookingService.pageInfo._id, {});
	}

	updateBookingList(bookingInfo :  any) : Observable<any>{
		return this.httpService.sendRequest(HttpService.PUT, BookingBERoutes.update + "/" + BookingService.pageInfo._id + "/" + bookingInfo._id, {});
	}

	deleteBooking(bookingId : string) : Observable<any>{
		return this.httpService.sendRequest(HttpService.DELETE, BookingBERoutes.delete + "/" + BookingService.pageInfo._id + "/" + bookingId, {});
	}
}