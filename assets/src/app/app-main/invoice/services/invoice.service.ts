import { Injectable } from '@angular/core';
import { HttpService, CacheService} from '../../shared-module';
import { PageInfoKey, InvoiceBERoutes } from '../../configs';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class InvoiceService{
	private static pageInfo : any = {};
	constructor(
		private httpService :HttpService,
		private cacheService : CacheService
	){
		InvoiceService.pageInfo = this.cacheService.get(PageInfoKey);
	}

	getInvoiceList() : Observable<any>{
		return this.httpService.sendRequest(HttpService.GET, InvoiceBERoutes.list + "/" + InvoiceService.pageInfo._id, {});
	};

	updateInvoice(invoiceInfo : any): Observable<any>{
		return this.httpService.sendRequest(HttpService.PUT, InvoiceBERoutes.update, invoiceInfo);
	}
	deleteInvoice(invoiceId : string) : Observable<any>{
		return this.httpService.sendRequest(HttpService.DELETE, InvoiceBERoutes.delete + "/" + invoiceId, {});
	};
}