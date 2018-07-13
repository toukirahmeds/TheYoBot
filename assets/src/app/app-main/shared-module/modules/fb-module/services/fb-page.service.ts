import { Injectable } from "@angular/core";
import { AuthResponse, LoginResponse, LoginStatus, LoginOptions, FacebookService, InitParams } from "ngx-facebook";
@Injectable()
export class FBPageService{
	public static FbApiVersion : string = "v2.12"
	constructor(public fbService : FacebookService){}
	initFb(appId : string, version : string = FBPageService.FbApiVersion){
		const params : InitParams = {
			appId : appId,
			xfbml : true,
			version : version
		};
		this.fbService.init(params);
	}

	pageList(accessToken, callback){
		this.fbService.api("/me/accounts", 'get', {
			access_token : accessToken,
			fields : "id,name,picture,access_token,category"
		}).then((response)=>{
			callback(null, response);
		}).catch((error)=>{
			callback(error, null);
		});
	}

	pageInfo(fbId, accessToken, callback){
		this.fbService.api("/v2.12/"+fbId,'get', {
			access_token : accessToken
		}).then((response)=>{
			callback(null, response);
		}).catch((error)=>{
			callback(error, null);
		});
	}

	pagePostList(fbId, accessToken, callback){
		this.fbService.api("/" + FBPageService.FbApiVersion+ "/" + fbId, 'get',{
			access_token : accessToken
		}).then((response)=>{
			callback(null, response);
		}).catch((error)=>{
			callback(error, null);
		});
	}
}