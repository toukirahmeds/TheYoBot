/*========================================
=            Import of models            =
========================================*/
const Oauth2RefreshToken = require("../models/Oauth2RefreshToken");
const Oauth2Client = require("../models/Oauth2Client");
const User = require("../../../models/User");


/*=====  End of Import of models  ======*/


module.exports = (refreshToken, callback)=>{
	// console.log("GET REFRESH TOKEN");
	Oauth2RefreshToken.find({
		"refreshToken" : refreshToken
	}).populate({
		"model" : "User",
		"path" : "user"
	}).populate({
		"model" : "Oauth2Client",
		"path" : "oauth2Client"
	}).exec((error, refreshTokenDoc)=>{
		if(error){
			callback(error, null);
		}else if(refreshTokenDoc[0]){
			let client = refreshTokenDoc[0].oauth2Client;
			client["id"] = client._id.toString();
			callback(null, {
				"refreshToken" : refreshTokenDoc[0].refreshToken,
				"refreshTokenExpiresAt"  : refreshTokenDoc[0].expires,
				"scope" : refreshTokenDoc[0].scope,
				"client" : client,
				"user" : refreshTokenDoc[0].user
			});
		}else{
			callback(null, null);
		}
	});
};
