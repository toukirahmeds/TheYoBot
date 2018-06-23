import { Injectable } from '@angular/core';
import { CacheService } from '../../cache';

@Injectable()
export class TokenService{
	private static accessToken;
	private static refreshToken;
	private static AccessTokenKey = "AccessToken";
	private static RefreshTokenKey = "RefreshToken";
	constructor(
		private cacheService : CacheService
	){

	}

	setAccessToken(token : string, tokenExpireTime? : Date){
		TokenService.accessToken = token;
		this.cacheService.set(TokenService.AccessTokenKey, token, tokenExpireTime);
	}

	getAccessTokenFromCache():string{
		TokenService.accessToken = this.cacheService.get(TokenService.AccessTokenKey);
		return TokenService.accessToken;
	}

	getAccessToken():string{
		if(TokenService.accessToken){
			return TokenService.accessToken;
		}else{
			return this.getAccessTokenFromCache();
		}
	}

	setRefreshToken(token : string, tokenExpireTime? : Date){
		TokenService.refreshToken = token;
		this.cacheService.set(TokenService.RefreshTokenKey, token, tokenExpireTime);
	}

	getRefreshTokenFromCache() : string {
		TokenService.refreshToken = this.cacheService.get(TokenService.RefreshTokenKey);
		return TokenService.refreshToken;
	}

	getRefreshToken() : string{
		if(TokenService.refreshToken){
			return TokenService.refreshToken;
		}else{
			return this.getRefreshTokenFromCache();
		}
	}

	clearTokens():void{
		this.cacheService.delete(TokenService.AccessTokenKey);
		this.cacheService.delete(TokenService.RefreshTokenKey);
	}
}