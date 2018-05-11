const request = require("request");
const config = require('../config/config.json');

const GRAPH_URL = 'https://graph.facebook.com';
const GRAPH_OAUTH_ACCESS_TOKEN_URL = '/oauth/access_token';

const getFbGraphParams = (accessToken, params = {})=>{
	let urlParams = "?";
	urlParams += "client_id="+config.app.fbAppId;
	urlParams += "&client_secret="+config.app.fbAppSecret;
	urlParams += "&access_token=" + accessToken;
	for(let i in params){
		urlParams+= "&" + i + "="+params[i];
	}

	return urlParams;
}

const getFbGraphUrl = (url, accessToken, params = {})=>{
	let finalUrl = GRAPH_URL + url;
	finalUrl+= getFbGraphParams(accessToken, params);
	return finalUrl;
}


const getFbGraphEndpoint = (objectId, edge, accessToken)=>{
	let finalUrl = GRAPH_URL + "/" + objectId + "/" + edge;
	finalUrl += getFbGraphParams(accessToken, {});
	return finalUrl;
};

module.exports.getLongLivedAccessToken = (slAccessToken, callback)=>{

	request(getFbGraphUrl(GRAPH_OAUTH_ACCESS_TOKEN_URL, slAccessToken, {
		"grant_type" : "fb_exchange_token",
		"fb_exchange_token" : slAccessToken
	}),(error, response, body)=>{
		if(error){
			callback(error, null);
		}else{
			let responseBody = JSON.parse(body);
			callback(null, responseBody['access_token']);
		}
	});
};



