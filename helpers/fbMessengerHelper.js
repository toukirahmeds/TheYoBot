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



module.exports.createPagePersistentMenu = (pageAccessToken, requestBody, callback)=>{
	if(requestBody){
		request({
			"method" : "POST",
			"url" : getFbGraphUrl("/me/messenger_profile", pageAccessToken, {}),
			"headers" : {
				"Content-Type" : "application/json"
			},
			"json" : requestBody
		},(error, response, body)=>{
			if(error){
				callback(error,null);
			}else{
				callback(null, body);
			}
		});
	}else{
		callback(null,null);
	}
	
};

module.exports.whitelistAppDomainForPage = (appDomains, pageAccessToken, callback)=>{
	request({
			"method" : "POST",
			"url" : getFbGraphUrl("/me/messenger_profile", pageAccessToken, {}),
			"headers" : {
				"Content-Type" : "application/json"
			},
			"json" : {
				"whitelisted_domains": appDomains
			}
		},(error, response, body)=>{
			if(error){
				callback(error,null);
			}else{
				callback(null, body);
			}
		});
};