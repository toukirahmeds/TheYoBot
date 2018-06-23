import { Injectable } from '@angular/core';
import { CacheService } from '../../cache';


@Injectable()
export class ScopeService{
	private static scope;
	private static ScopeKey = "Scope";
	constructor(
		private cacheService : CacheService 
	){}

	setScope(scope : string){
		ScopeService.scope = scope;
		this.cacheService.set(ScopeService.ScopeKey, scope);
	}

	getScopeFromCache() : string{
		ScopeService.scope = this.cacheService.get(ScopeService.ScopeKey);
		return ScopeService.scope;
	}

	getScope(){
		if(ScopeService.scope){
			return ScopeService.scope;
		}else{
			return this.getScopeFromCache();
		}
	}
}