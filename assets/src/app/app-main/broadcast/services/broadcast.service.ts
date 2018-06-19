import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { HttpService } from '../../shared-module';

import { BroadcastBERoutes } from '../../configs';


@Injectable()
export class BroadcastService{
	constructor(
		private httpService : HttpService
	){

	}

	getAllBroadcasts(): Observable<any>{
		return this.httpService.sendRequest(HttpService.GET, BroadcastBERoutes.list, {});
	}

	createBroadcast(broadcast : any) : Observable<any>{
		return this.httpService.sendRequest(HttpService.POST, BroadcastBERoutes.create, broadcast);
	}

	updateBroadcast(broadcast : any) : Observable<any>{
		return this.httpService.sendRequest(HttpService.PUT, BroadcastBERoutes.update, broadcast);
	}

	deleteBroadcast(broadcast : any) : Observable<any>{
		return this.httpService.sendRequest(HttpService.DELETE, BroadcastBERoutes.delete, {});
	}

}