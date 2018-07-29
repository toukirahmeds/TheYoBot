import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TokenService, CacheService } from '../shared-module';
import { AuthService } from '../auth';
import { FuseConfigChangeService } from './fuseConfig.service';
import { ActivatedRouteSnapshot } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate{
	constructor(
		private tokenService : TokenService,
		private authService : AuthService,
		private fuseChangeConfigService : FuseConfigChangeService,
		private cacheService : CacheService
	){

	}


	setFuseConfig(full : boolean){
		if(full) this.fuseChangeConfigService.fuseSetSettingsLoggedOut();
		else this.fuseChangeConfigService.fuseSetSettingsLoggedIn();
	}

	canActivate(activatedRouteSnapshot : ActivatedRouteSnapshot){

		if(this.tokenService.getAccessToken()){
			this.setFuseConfig(activatedRouteSnapshot['data']["full"]);
			return true;
		}else{
			this.authService.signOut().subscribe((response)=>{
				return false;
			},(errorResponse)=>{
				return false;
			});
		}
	}
}