import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import  "rxjs/Rx";
import { Router } from '@angular/router';


import { TokenService, ScopeService } from '../../auth2';
import { CacheService } from '../../cache';

import { AuthBERoutes, ClientCredentials } from '../../../../configs';


@Injectable()
export class HttpService {
	public static GET : string = "GET";
	public static POST : string = "POST";
	public static PUT : string = "PUT";
	public static DELETE : string = "DELETE"; 
	public static requestedUrl : string;
	public static requestedBody : any;

	constructor(
		private http : HttpClient,
		private tokenService : TokenService,
		private cacheService : CacheService,
		private scopeService : ScopeService,
		private router : Router
	){}


	private getHttpHeaders(){
		let accessToken = this.tokenService.getAccessToken();
		let httpHeaders : HttpHeaders = new HttpHeaders().set("Content-Type","application/json").append("authorization", "Bearer " + accessToken);

		return httpHeaders;

	}

	private getHttpParams(body : any){
		
	}

	private getHttpOptions(params? :any){
		let httpOptions = {
			headers : this.getHttpHeaders()
		};



		if(params){
			httpOptions['params'] = params
		}

		return httpOptions;
	}

	sendRequest(method : string, url : string, body : any):Observable<any>{
		method = method.toUpperCase();
		switch(method){
			case HttpService.GET:
				return this.sendGETRequest(url, body);
			case HttpService.POST:
				return this.sendPOSTRequest(url, body);
			case HttpService.PUT:
				return this.sendPUTRequest(url, body);
			case HttpService.DELETE:
				return this.sendDELETERequest(url, body);
		}
	}


	private sendGETRequest(url : string, body : any):Observable<any>{
		let httpOptions = this.getHttpOptions(body);
		return this.http.get(url, httpOptions);
	}

	private sendPOSTRequest(url : string, body : any):Observable<any>{
		let httpOptions = this.getHttpOptions();
		return this.http.post(url, body, httpOptions);
	}

	private sendPUTRequest(url : string, body : any):Observable<any>{
		let httpOptions = this.getHttpOptions();
		return this.http.put(url, body, httpOptions);
	}

	private sendDELETERequest(url : string, body : any):Observable<any>{
		let httpOptions = this.getHttpOptions();
		return this.http.delete(url, httpOptions);
	}

	signUp(signUpUrl : string, signUpInfo : any) : Observable<any>{
		return this.http.post(signUpUrl, signUpInfo);
	}

	login(loginInfo : any): Observable<any>{
		const httpHeaders = new HttpHeaders({
			'Content-Type' : 'application/x-www-form-urlencoded'
		});
		const requestBody = new HttpParams()
				.set("grant_type","password")
				.append("client_id",ClientCredentials.clientId)
				.append("client_secret",ClientCredentials.clientSecret)
				.append("username",loginInfo.userIdentity)
				.append("password",loginInfo.password);
		
		return this.http.post(AuthBERoutes.authenticate,requestBody,{headers : httpHeaders, observe:'response'}).map((response : any)=>{
			this.setTokens(response.body.accessToken, new Date(response.body.accessTokenExpiresAt), response.body.refreshToken, new Date(response.body.refreshTokenExpiresAt));
			return response;
		},(errorResponse : any)=>{
			return errorResponse;
		});
	}

	logout() : Observable<any>{
		return this.http.post(AuthBERoutes.logout, {
			"accessToken" : this.tokenService.getAccessToken(),
			"refreshToken" : this.tokenService.getRefreshToken()
		}).switchMap((response)=>{
			this.tokenService.clearTokens();
			return Observable.of(response);
		});
	}



	

	setTokens(accessToken : string, accessTokenExpireTime : Date, refreshToken : string, refreshTokenExpireTime : Date){
		this.tokenService.setAccessToken(accessToken, accessTokenExpireTime);
		this.tokenService.setRefreshToken(refreshToken, refreshTokenExpireTime);
	}


}
