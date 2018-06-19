import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FuseConfigService } from '../../../core/services/config.service';

import { HttpService, FBPageService } from '../../shared-module';
import { PageBERoutes } from '../../configs';


@Injectable()
export class PageService{
	constructor(
		private httpService : HttpService,
		private fbPageService : FBPageService,
		private fuseConfigService : FuseConfigService
	){

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

	getPageList(callback){
		this.fbPageService.pageList("",(error, pageList)=>{
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

	updatePage( pageInfo : any): Observable<any>{
		return this.httpService.sendRequest(HttpService.PUT, PageBERoutes.update, pageInfo);
	}

	deletePage( pageInfo : any ):Observable<any>{
		return this.httpService.sendRequest(HttpService.DELETE, PageBERoutes.delete, pageInfo);
	}
}