import { Injectable } from '@angular/core';

export class CacheService{
	private cache = new Map<string, [Date, any]>();
	private cacheKey = "AppData";
	private cacheObj : any = {};
	private securityObj : {
		'cacheLength' : number,
		'cacheStoredIntervalSteps' : number
	} = {
		'cacheLength' : 0,
		'cacheStoredIntervalSteps' : 0
	};
	private securityKeysSaltRounds : number = 3;
	private securityKeysCacheKey : string = "rands";
	constructor(){
		try{
			this.getSecurityKeysFromLocalStorage();
		}catch(error){
			if(error) this.clearCache();
		}
	}

	decodeSecurityKey(securityString : string):string{
		for(let i=0;i<this.securityKeysSaltRounds;i++){
			securityString = atob(securityString);
		}

		return securityString;
	}

	getSecurityKeysFromLocalStorage(){
		if(localStorage.getItem(this.securityKeysCacheKey)){
			this.securityObj = JSON.parse(this.decodeSecurityKey(localStorage.getItem(this.securityKeysCacheKey)));
			this.getCacheFromLocalStorage();
		}
	}

	encodeSecurityKey():string{
		let securityKeyString = JSON.stringify(this.securityObj);
		for(let i = 0; i<this.securityKeysSaltRounds; i++){
			securityKeyString = btoa(securityKeyString);
		}

		return securityKeyString;
	}

	saveSecurityKeysToLocalStorage(){
		localStorage.setItem(this.securityKeysCacheKey, this.encodeSecurityKey());
	}

	getCacheFromLocalStorage(){
		let cacheString = "";
		for(let i=0; i<this.securityObj.cacheStoredIntervalSteps; i++){
			cacheString+=localStorage.getItem(this.cacheKey+(i+1));
		}
		let cacheArr;
		if(cacheString){
			cacheArr = JSON.parse(this.decodeCache(cacheString));
			for(let i = 0; i<cacheArr.length ; i++){
				this.cache.set(cacheArr[i][0], cacheArr[i][1]);
			}
			this.securityObj.cacheLength = cacheArr.length;
			this.securityObj.cacheStoredIntervalSteps = cacheArr.length%2==0?7:8;
		}

	}

	decodeCache(encodedCache : string): string{
		
		for(let i=0;i<this.securityObj.cacheLength; i++){
			encodedCache = atob(encodedCache);
		}
		return encodedCache;
	}

	encodeCache(cacheArr : any):string{
		let encodedCache = JSON.stringify(cacheArr);
		for(let i = 0; i< this.securityObj.cacheLength;i++){
			encodedCache = btoa(encodedCache);
		}
		return encodedCache;
	}

	saveCacheToLocalStorage(){
		this.securityObj.cacheLength = this.cache.size;
		this.saveSecurityKeysToLocalStorage();
		
		let cacheIterator = this.cache.entries();
		let storedCacheArr = [];
		for(let i = 0; i<this.securityObj.cacheLength;i++){
			storedCacheArr.push(cacheIterator.next().value);
		}
		let encodedCache = this.encodeCache(storedCacheArr);
		const encodedCacheLength = encodedCache.length;
		this.securityObj.cacheStoredIntervalSteps = encodedCacheLength%2==0?7:8;
		const intervalLength = encodedCacheLength/(this.securityObj.cacheStoredIntervalSteps);
		let intervalStepNo = 1;
		for(let i = 0; i< this.securityObj.cacheStoredIntervalSteps; i++){
			let start = i*intervalLength;
			let end = intervalStepNo === this.securityObj.cacheStoredIntervalSteps? encodedCacheLength: (start + intervalLength);
			localStorage.setItem(this.cacheKey+(i+1), encodedCache.slice(start, end));
			intervalStepNo++;
		}

		storedCacheArr = [];
	}

	set(key : string, value : any, expiryTime? : Date){
		if(expiryTime){
			let expires = expiryTime;
			this.cache.set(key, [expires, value]);
			this.cacheObj[key] = [expires, value];
		}else{
			this.cache.set(key, [null, value]);
			this.cacheObj[key] = [null, value];
		}
		this.saveCacheToLocalStorage();
	}

	get(key : string){
		let cacheTuple = this.cache.get(key);
		if(!cacheTuple) return null;
		if(cacheTuple[0]){
			let cacheTupleExpires = new Date(cacheTuple[0]);
			let now = new Date();
			if(cacheTupleExpires.getTime() < now.getTime()){
				this.cache.delete(key);
				return null;
			}
		}
		return cacheTuple[1];
	}

	delete(key : string):void{
		if(this.cache.has(key)){
			this.cache.delete(key);
			this.saveCacheToLocalStorage();
		}
	}

	clearCache(){
		this.cache.clear();
		localStorage.clear();
	}
}