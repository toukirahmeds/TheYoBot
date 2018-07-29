import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { Router } from '@angular/router';
import { TokenService, CacheService } from '../shared-module';
import { AuthService } from '../auth';
import { FuseConfigChangeService } from './fuseConfig.service';

import { MessengerConversationFERoutes, FrontendRoutes, LastVisitedUrlKey } from '../configs';


@Injectable()
export class AppMainService{
	private lastVisitedUrl : string;
	
	constructor(
		private tokenService : TokenService,
		private authService : AuthService,
		private cacheService : CacheService,
		private fuseConfigChangeService : FuseConfigChangeService,
		private router  : Router
	){}

	checkLastVisitedUrl(){
		return this.cacheService.get(LastVisitedUrlKey);
	}

	setLoggedInFuseConfig(){
		this.fuseConfigChangeService.fuseSetSettingsLoggedIn();
	}


	redirectToLoggedInUrl(){
		if(this.checkLastVisitedUrl()){
			this.router.navigateByUrl(this.checkLastVisitedUrl());
		}else{
			this.router.navigateByUrl(FrontendRoutes.MessengerConversationFEUrl + "/" + MessengerConversationFERoutes.messengerConversationFlow);
		}
	}


	checkUserLoggedIn(){
		if(this.tokenService.getAccessToken() || this.tokenService.getRefreshToken()){
			this.fuseConfigChangeService.fuseSetSettingsLoggedIn();
			this.redirectToLoggedInUrl();
		}else{
			this.authService.signOut().subscribe((response)=>{
				this.fuseConfigChangeService.fuseSetSettingsLoggedOut();
				this.authService.redirectToLogin();
			},(errorResponse)=>{

			});
		}
	};


	logOut(){
		this.authService.signOut().subscribe((response)=>{
			this.cacheService.clearCache();
			this.fuseConfigChangeService.fuseSetSettingsLoggedOut();
			this.authService.redirectToLogin();
		},(errorResponse)=>{
			console.log(errorResponse);
		});
	}

	
}