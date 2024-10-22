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

const formatSenderInfo = (senderInfo)=>{
	return {
		"psid" : senderInfo.id,
		"firstName" : senderInfo.first_name,
		"lastName" : senderInfo.last_name,
		"profilePic" : senderInfo.profile_pic,
		"locale" : senderInfo.locale,
		"timezone" : senderInfo.timezone,
		"gender" : senderInfo.gender,
		"isPaymentEnabled" : senderInfo.is_payment_enabled,
		"lastAdReferral" : senderInfo.last_ad_referral
	};
};

module.exports.getSenderInfo = (accessToken, senderId, callback)=>{
	request.get(getFbGraphUrl("/"+senderId, accessToken, {
		"fields" : "first_name,last_name,profile_pic,locale,timezone,gender,is_payment_enabled,last_ad_referral"
	}), (error, response, body)=>{
		if(error){
			callback(error, null);
		}else{
			let responseBody = JSON.parse(body);
			callback(null, formatSenderInfo(responseBody));
		}
	});
};