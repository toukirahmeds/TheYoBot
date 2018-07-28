import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { TokenService, CacheService } from '../shared-module';
import { AuthService } from '../auth';
import { FuseConfigChangeService } from './fuseConfig.service';


@Injectable()
export class AppMainService{
	
	constructor(
		private tokenService : TokenService,
		private authService : AuthService,
		private cacheService : CacheService,
		private fuseConfigChangeService : FuseConfigChangeService
	){}


	checkUserLoggedIn(){
		if(this.tokenService.getAccessToken()){
			// this.authService.
		}else{
			this.authService.signOut().subscribe((response)=>{
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