import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import  "rxjs/Rx";

@Injectable()
export class HttpService{
	public static GET : string = "GET";
	public static POST : string = "POST";
	public static PUT : string = "PUT";
	public static DELETE : string = "DELETE"; 

	constructor(private http : HttpClient){}


	private getHttpHeaders(){
		let httpHeaders : HttpHeaders = new HttpHeaders();
		httpHeaders.set("Content-Type","application/json");
		let accessToken = localStorage.getItem("accessToken");
		let refreshToken = localStorage.getItem("refreshToken");
		if(accessToken){
			httpHeaders.append("accessToken", accessToken);
		}

		if(refreshToken){
			httpHeaders.append("refreshToken", refreshToken);
		}

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
		return this.http.get(url, httpOptions).map((response)=>{
			return response;
		});
	}

	private sendPOSTRequest(url : string, body : any):Observable<any>{
		let httpOptions = this.getHttpOptions();
		return this.http.post(url, body, httpOptions).map((response)=>{
			return response;
		});
	}

	private sendPUTRequest(url : string, body : any):Observable<any>{
		let httpOptions = this.getHttpOptions();
		return this.http.put(url, body, httpOptions).map((response)=>{
			return response;
		});
	}

	private sendDELETERequest(url : string, body : any):Observable<any>{
		let httpOptions = this.getHttpOptions();
		return this.http.delete(url, httpOptions).map((response)=>{
			return response;
		});
	}

	refreshAccessToken(){

	}
}
