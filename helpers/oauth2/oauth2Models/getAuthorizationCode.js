/*========================================
=            Import of models            =
========================================*/
const Oauth2AuthorizationCode = require("../models/Oauth2AuthorizationCode");
const Oauth2Client = require("../models/Oauth2Client");
const User = require("../../../models/User");


/*=====  End of Import of models  ======*/


module.exports = (authorizationCode, callback)=>{
	console.log("GET Authorization Code");
	console.log(authorizationCode);
	Oauth2AuthorizationCode.find({
		"authorizationCode" : authorizationCode
	}).populate({
		"model" : "User",
		"path" : "user"
	}).populate({
		"model" : "Oauth2Client",
		"path" : "oauth2Client"
	}).exec((error, authorizationCodeDoc)=>{
		if(error){
			callback(error, null);
		}else{
			let client = authorizationCodeDoc[0].oauth2Client;
			client["id"] = client._id.toString();
			callback(null, {
				"code" : authorizationCodeDoc[0].authorizationCode,
				"expiresAt" : authorizationCodeDoc[0].expires,
				"redirectUri": authorizationCodeDoc[0].redirectUri,
				"scope" : authorizationCodeDoc[0].scope,
				"client": client,
				"user" : authorizationCodeDoc[0].user
			});
		}
	});
};