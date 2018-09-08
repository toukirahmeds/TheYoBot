const request = require("request");
const config = require('../config/config.json');

const GRAPH_URL = 'https://graph.facebook.com';
const GRAPH_OAUTH_ACCESS_TOKEN_URL = '/oauth/access_token';


/*=========================================
=            Import of helpers            =
=========================================*/
const fbMessageTemplateHelper = require("./fbMessageTemplateHelper");


/*=====  End of Import of helpers  ======*/


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




const getMessageBody = (template)=>{
	// console.log("GET MESSAGE BODY");
	// console.log(template);
	let messageBody = {};
	if(template && template.message){
		messageBody['text'] = template.message;
		if(template.quickReplies && template.quickReplies.length) messageBody['quick_replies'] = template.quickReplies;
	}else if(template && template.attachment && template.attachment.properties && template.attachment.properties.length){
		// console.log(template.attachment.properties);
		messageBody['attachment'] = {
			"type" : "template",
			"payload" : fbMessageTemplateHelper.getMessageTemplate(template.templateType, template.attachment)
		};
	}

	console.log(messageBody);

	return messageBody;
};


const getRequestBody = (messageType, recipientId, template)=>{
	return {
		"messaging_type" : messageType,
		"recipient" : {
			"id" : recipientId
		},
		"message" : getMessageBody(template)
	};
};


const getSendMessageRequest = (accessToken, messageType, recipientId, template)=>{
	return {
		"method" : "POST",
		"url" : getFbGraphUrl("/me/messages", accessToken, {}),
		"headers" : {
			"Content-Type" : "application/json"
		},
		"json" : getRequestBody(messageType, recipientId, template)
	};
}

module.exports.sendMessage = (pageAccessToken, messageType, recipientId, messageTemplate, callback)=>{
	request.post(getSendMessageRequest(pageAccessToken, messageType, recipientId, messageTemplate), /*callback*/(error, response, body)=>{
		console.log(body);
		callback(null, body);
	});
}