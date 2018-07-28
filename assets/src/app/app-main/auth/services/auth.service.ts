import { Injectable, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";

import { HttpService, CacheService } from "../../shared-module";
import { AuthBERoutes, UserBERoutes, FrontendRoutes, PageFERoutes, FbAcessTokenKey } from "../../configs";


@Injectable()
export class AuthService{
	constructor(
		private httpService : HttpService,
		private cacheService : CacheService,
		private router : Router
	){}



	signIn(signInInfo : any): Observable<any>{
		this.cacheService.clearCache();
		return this.httpService.login(signInInfo);
	}

	saveFbAccessToken(token : string){
		this.cacheService.set(FbAcessTokenKey, token);
	}


	signUp(signUpInfo : any): Observable<any>{
		return this.httpService.signUp(UserBERoutes.create, signUpInfo);
	}

	signOut(): Observable<any>{
		return this.httpService.logout();
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