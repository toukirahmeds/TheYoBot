import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { FuseConfigService } from '../../../core/services/config.service';

import { HttpService, FBPageService , CacheService} from '../../shared-module';
import { PageInfoKey, FrontendRoutes, PageBERoutes, FbAcessTokenKey, MessengerConversationFERoutes } from '../../configs';


@Injectable()
export class PageService{
	constructor(
		private router : Router,
		private httpService : HttpService,
		private cacheService : CacheService,
		private fbPageService : FBPageService,
		private fuseConfigService : FuseConfigService
	){
		console.log("PAGE SERVICE");
	}

	setFuseConfigs(){
		this.fuseConfigService.setSettings({
            layout          : {
                navigation      : 'none',       // 'right', 'left', 'top', none
                navigationFolded: false,        // true, false
                toolbar         : 'none',      // 'above', 'below', none
                footer          : 'none',        // 'above', 'below', none
                mode            : 'fullwidth'   // 'boxed', 'fullwidth'
            },
            colorClasses    : {
                toolbar: 'mat-white-500-bg',
                navbar : 'mat-fuse-dark-700-bg',
                footer : 'mat-fuse-dark-900-bg'
            },
            customScrollbars: true,
            routerAnimation : 'fadeIn'
        });
	}

	getFbAccessToken():any{
		console.log(this.cacheService.get("FbAccessTokenKey"));
		return this.cacheService.get(FbAcessTokenKey);
	}

	getPageList(callback){
		this.fbPageService.pageList(this.getFbAccessToken(),(error, pageList)=>{
			if(error){
				callback(error, null);
			}else{
				callback(null, pageList);
			}
		});
	}

	connectToPage( pageInfo : any ): Observable<any>{
		return this.httpService.sendRequest(HttpService.POST, PageBERoutes.create, pageInfo);
	}

	savePageInfoToCache( pageInfo : any){
		this.cacheService.set(PageInfoKey, pageInfo);
	}

	getformattedPageInfo(pageInfo : any):any{
		return {
			"name" : pageInfo.name,
			"fbId" : pageInfo.id,
			"fbAccessToken" : pageInfo.access_token
		};
	}

	createPage( pageInfo : any): Observable<any>{
		console.log(PageBERoutes.create);
		return this.httpService.sendRequest(HttpService.POST, PageBERoutes.create, pageInfo);
	}

	updatePage( pageInfo : any): Observable<any>{
		return this.httpService.sendRequest(HttpService.PUT, PageBERoutes.update, pageInfo);
	}

	deletePage( pageInfo : any ):Observable<any>{
		return this.httpService.sendRequest(HttpService.DELETE, PageBERoutes.delete, pageInfo);
	}

	redirectToDashboard(){
		this.router.navigateByUrl(FrontendRoutes.MessengerConversationFEUrl + "/" + MessengerConversationFERoutes.messengerConversationFlow);
	}
}