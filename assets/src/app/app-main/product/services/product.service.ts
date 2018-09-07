import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService, CacheService } from '../../shared-module';
import { ProductBERoutes, PageInfoKey } from '../../configs';

@Injectable()
export class ProductService{
	private static pageInfo : any = {};
	constructor(
		private httpService : HttpService,
		private cacheService : CacheService
	){
		ProductService.pageInfo =  this.cacheService.get(PageInfoKey);
	}

	getProductList() : Observable<any>{
		return this.httpService.sendRequest(HttpService.GET, ProductBERoutes.list + "/" + ProductService.pageInfo._id, {});
	}

	createProduct(productInfo : any) : Observable<any>{
		productInfo["page"] = this.cacheService.get(PageInfoKey)["_id"];
		return this.httpService.sendRequest(HttpService.POST, ProductBERoutes.create, productInfo);
	}

	editProduct(productInfo : any):Observable<any>{
		return this.httpService.sendRequest(HttpService.PUT, ProductBERoutes.update, productInfo);
	}


	deleteProduct(productId : string){
		return this.httpService.sendRequest(HttpService.DELETE, ProductBERoutes.delete + "/" + productId, {});
	}



	
}