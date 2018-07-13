import { Injectable } from '@angular/core';
import { HttpService, CacheService, FBPageService } from '../../shared-module';

import { PageInfoKey } from '../../configs';

@Injectable()
export class FbPostService{
	private static pageInfo : any;
	constructor(
		private httpService : HttpService,
		private cacheService : CacheService,
		private fbPageService : FBPageService
	){
		this.setPageInfo();
	}

	getPageInfo(){
		if(FbPostService.pageInfo){
			return FbPostService.pageInfo;
		}else{
			this.cacheService.get(PageInfoKey);
		}
	}

	setPageInfo(){
		FbPostService.pageInfo = this.getPageInfo();
	}

	getFbPostList(){

	}

	getPostAutomationList(){

	}

	createPostAutomation(){

	}

	updatePostAutomation(){

	}

	deletePostAutomation(){

	}


}