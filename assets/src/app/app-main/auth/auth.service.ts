import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

import { HttpService } from "../shared-module";
import { AuthBERoutes, UserBERoutes, FrontendRoutes } from "../configs";

import { FuseConfigService } from '../../core/services/config.service';

@Injectable()
export class AuthService{
	constructor(
		private httpService : HttpService,
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
		return this.httpService.sendRequest(HttpService.POST, AuthBERoutes.authenticate, signInInfo);
	}


	signUp(signUpInfo : any): Observable<any>{
		return this.httpService.sendRequest(HttpService.POST, UserBERoutes.create, signUpInfo);
	}

	signOut(): Observable<any>{
		return this.httpService.sendRequest(HttpService.POST, AuthBERoutes.authenticate, {});
	}

	forgotPassword(forgotPasswordInfo : any) : Observable<any>{
		return this.httpService.sendRequest(HttpService.POST, "", forgotPasswordInfo);
	}

	recoverPassword(recoverPasswordInfo : any) : Observable<any>{
		return this.httpService.sendRequest(HttpService.POST, "", recoverPasswordInfo);
	} 


	redirectToPage():void{
		this.router.navigateByUrl(FrontendRoutes.PageFEUrl);
	}

	redirectToLogin():void{
		this.router.navigateByUrl(FrontendRoutes.AuthFEUrl);
	}

	


}