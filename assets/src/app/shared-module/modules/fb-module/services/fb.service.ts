import { Injectable } from "@angular/core";
import { AuthResponse, LoginResponse, LoginStatus, LoginOptions, FacebookService, InitParams } from "ngx-facebook";

import { FBUserService } from './fb-user.service';
import { FBPageService } from './fb-page.service';


@Injectable()
export class FbService{
	constructor(public fbService : FacebookService, private fbUserService : FBUserService, private fbPageService : FBPageService){}

	initFb(appId : string, version : string = "v2.12"){
		const params : InitParams = {
			appId : appId,
			xfbml : true,
			version : version
		};
		this.fbService.init(params);
		this.fbUserService.initFb(appId);
		this.fbPageService.initFb(appId);
	}


	apiCall(method, url, params, callback){
		this.fbService.api(url, method, params).then((response)=>{
			console.log(response);
			callback(null, response);
		}).catch((error)=>{
			console.log(error);
			callback(error, null);
		});
	}
}