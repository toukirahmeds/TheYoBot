import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

import { HttpService, CacheService } from "../../shared-module";
import { AuthBERoutes, UserBERoutes, FrontendRoutes, PageFERoutes, FbAcessTokenKey } from "../../configs";

import { FuseConfigService } from '../../../core/services/config.service';

@Injectable()
export class AuthService{
	constructor(
		private httpService : HttpService,
		private cacheService : CacheService,
		private router : Router,
		private fuseConfigService : FuseConfigService
	){

	}

	setFuseConfigs():void{
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

	signIn(signInInfo : any): Observable<any>{
		this.cacheService.clearCache();
		return this.httpService.login(signInInfo);
	}

	saveFbAccessToken(token : string){
		console.log(token);
		this.cacheService.set(FbAcessTokenKey, token);
		console.log(this.cacheService.get(FbAcessTokenKey));
	}


	signUp(signUpInfo : any): Observable<any>{
		console.log(UserBERoutes.create);
		return this.httpService.signUp(UserBERoutes.create, signUpInfo);
	}

	signOut(): Observable<any>{
		return this.httpService.sendRequest(HttpService.POST, AuthBERoutes.authenticate, {});
	}

	sendPasswordRecoveryLink(forgotPasswordInfo : any) : Observable<any>{
		return this.httpService.sendRequest(HttpService.POST, "", forgotPasswordInfo);
	}


	recoverPassword(recoverPasswordInfo : any) : Observable<any>{
		return this.httpService.sendRequest(HttpService.POST, "", recoverPasswordInfo);
	} 


	redirectToPage():void{
		this.router.navigateByUrl(FrontendRoutes.PageFEUrl + "/" + PageFERoutes.pageList);
	}

	redirectToLogin():void{
		this.router.navigateByUrl(FrontendRoutes.AuthFEUrl);
	}

	


}