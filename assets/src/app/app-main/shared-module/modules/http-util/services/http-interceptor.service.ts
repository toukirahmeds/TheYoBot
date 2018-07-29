import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpParams, HttpInterceptor, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";

import  'rxjs/add/observable/throw';
// import  'rxjs/add/operator/of';

import { TokenService, ScopeService } from '../../auth2';
import { CacheService } from '../../cache';


import { AuthBERoutes, ClientCredentials } from '../../../../configs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor{
	constructor(
		private tokenService : TokenService,
		private scopeService : ScopeService,
		private http : HttpClient,
		private cacheService : CacheService,
		private router : Router
	){

	}

	addToken(req : HttpRequest<any>, token:string){
		return req;
	}

	logout() : Observable<any>{
		return this.http.post(AuthBERoutes.logout, {
			"accessToken" : this.tokenService.getAccessToken(),
			"refreshToken" : this.tokenService.getRefreshToken()
		}).finally(()=>{
			this.tokenService.clearTokens();
			this.cacheService.clearCache();
			this.router.navigateByUrl("/");
		});
	}

	refreshAccessToken():Observable<any>{
		const httpHeaders = new HttpHeaders({
			'Content-Type' : 'application/x-www-form-urlencoded'
		});
		const requestBody = new HttpParams()
				.set("grant_type","refresh_token")
				.append("client_id",ClientCredentials.clientId)
				.append("client_secret",ClientCredentials.clientSecret)
				.append("refresh_token", this.tokenService.getRefreshToken());
		
		return this.http.post(AuthBERoutes.authenticate, requestBody, { headers : httpHeaders });
	}

	intercept(req : HttpRequest<any>, next : HttpHandler):Observable<any>{
		return next.handle(this.addToken(req, this.tokenService.getAccessToken())).catch((error, caught)=>{
			if(error.status === 401 && this.tokenService.getRefreshToken()){
				return this.refreshAccessToken().switchMap((response)=>{
					return next.handle(req);
				}).catch((error)=>{
					return this.logout();
				});

			}else{
				return Observable.throw(error);
				
			}
		})
	}
}