/*========================================
=            Import of models            =
========================================*/
const Oauth2AccessToken = require("../models/Oauth2AccessToken");
const Oauth2Client = require("../models/Oauth2Client");
const User = require("../../../models/User");


/*=====  End of Import of models  ======*/


module.exports = (accessToken, callback)=>{
	// console.log("GET ACCESS TOKEN");
	Oauth2AccessToken.find({
		"accessToken" : accessToken
	}).populate({
		"model" : "User",
		"path" : "user"
	}).populate({
		"model" : "Oauth2Client",
		"path" : "oauth2Client"
	}).exec((error, accessTokenDoc)=>{
		if(error){
			callback(error, null);
		}else if(accessTokenDoc[0]){
			let client = accessTokenDoc[0].oauth2Client;
			client["id"] = client._id.toString();
			callback(null, {
				"accessToken" : accessTokenDoc[0].accessToken,
				"accessTokenExpiresAt"  : accessTokenDoc[0].expires,
				"scope" : accessTokenDoc[0].scope,
				"client" : client,
				"user" : accessTokenDoc[0].user
			});
		}else{
			callback(null,null);
		}
	});
};
