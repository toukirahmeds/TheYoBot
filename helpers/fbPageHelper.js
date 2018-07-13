const request = require("request");
const config = require('../config/config.json');

const GRAPH_URL = 'https://graph.facebook.com';
const GRAPH_OAUTH_ACCESS_TOKEN_URL = '/oauth/access_token';

/*======================================================
=            Import of fbPageCategoryHelper            =
======================================================*/
const fbPageCategoryHelper = require("./fbPageCategoryHelper");
const fbMessengerHelper = require("./fbMessengerHelper");

/*=====  End of Import of fbPageCategoryHelper  ======*/


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


module.exports.subscribeAppToPage = (pageId, accessToken, callback)=>{
	request.post(getFbGraphEndpoint(pageId,'subscribed_apps', accessToken), (error, response,body)=>{
		if(error){
			console.log(error);
		}else{
			console.log(body);
		}
	});
};

module.exports.unsubscribeAppToPage = (pageId, accessToken, callback)=>{
	request.delete(getFbGraphEndpoint(pageId,'subscribed_apps', accessToken), (error, response,body)=>{
		if(error){
			console.log(error);
		}else{
			console.log(body);
		}
	});
};

module.exports.updatePageMessengerPersistentMenu = (pageId, pageCategory, accessToken, callback)=>{
	fbMessengerHelper.createPagePersistentMenu(pageId, accessToken,fbPageCategoryHelper.getPersistentMenu(pageCategory), (error, updatedPersistentMenuInfo)=>{
		if(error){
			callback(error, null);
		}else{
			callback(null, updatedPersistentMenuInfo);
		}
	});
};

