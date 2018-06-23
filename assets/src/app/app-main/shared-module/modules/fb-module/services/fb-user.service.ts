import { Injectable } from "@angular/core";
import { AuthResponse, LoginResponse, LoginStatus, LoginOptions, FacebookService, InitParams } from "ngx-facebook";
@Injectable()
export class FBUserService{
	constructor(public fbService : FacebookService){}
	initFb(appId : string, version : string = "v2.12"){
		console.log("INIT FB");
		const params : InitParams = {
			appId : appId,
			xfbml : true,
			version : version
		};
		this.fbService.init(params);
	}


	loginStatus(callback){
		this.fbService.getLoginStatus().then((loginStatus : LoginStatus)=>{
			console.log(loginStatus);
			callback(null, loginStatus);
		}).catch((error)=>{
			console.log(error);
			callback(error, null);
		});
	}


	login(callback){
		this.fbService.login().then((loginResponse : LoginResponse )=>{
			console.log(loginResponse);
			callback(null, loginResponse);
		}).catch((error)=>{
			callback(error, null)
			console.log(error);
		});
	}


	logOut(){
		this.fbService.logout().then((response)=>{
			console.log(response);
		}).catch((error)=>{
			console.log(error);
		});
	}


	currentUserInfo(callback){
		this.fbService.api("/me").then((response)=>{
			console.log(response);
			callback(null, response);
		}).catch((error)=>{
			console.log(error);
			callback(error, null);
		});
	}


	// pageList(callback){
	// 	this.fbService.api("/me/accounts").then((response)=>{
	// 		console.log(response);
	// 		callback(null, response);
	// 	}).catch((error)=>{
	// 		callback(error, null);
	// 	});
	// }
}