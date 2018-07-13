import { Injectable } from '@angular/core';
import { HttpService, CacheService } from '../../shared-module';


@Injectable()
export class MyBusinessService{
	private static businessInfo : any;

	constructor(
		private httpService : HttpService,
		private cacheService : CacheService
	){}

	getBusinessInfo(){

	}

	getMyBusinessInfo(){

	}

	createMyBusinessInfo(){

	}

	updateMyBusinessInfo(){

	}


}