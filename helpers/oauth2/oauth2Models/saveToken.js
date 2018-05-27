/*========================================
=            Import of models            =
========================================*/
const Oauth2AccessToken = require("../models/Oauth2AccessToken");
const Oauth2RefreshToken = require("../models/Oauth2RefreshToken");
/*=====  End of Import of models  ======*/


module.exports = (token, client, user, callback)=>{
	Oauth2AccessToken.create({
		"accessToken" : token.accessToken,
		"expires" : token.accessTokenExpiresAt,
		"scope" : token.scope,
		"user" : user._id,
		"oauth2Client" : client._id
	},(error, oauth2AccessTokenDoc)=>{
		if(error){
			callback(error, null);
		}else{
			Oauth2RefreshToken.create({
				"refreshToken" : token.refreshToken,
				"expires" : token.refreshTokenExpiresAt,
				"scope" : token.scope,
				"user" : user._id,
				"oauth2Client" : client._id
			},(error, oauth2RefreshTokenDoc)=>{
				if(error){
					callback(error, null);
				}else{
					callback(null, {
						"accessToken" : oauth2AccessTokenDoc.accessToken.toString(),
						"accessTokenExpiresAt" : oauth2AccessTokenDoc.expires,
						"refreshToken" : oauth2RefreshTokenDoc.refreshToken.toString(),
						"refreshTokenExpiresAt" : oauth2RefreshTokenDoc.expires,
						"scope": oauth2AccessTokenDoc.scope,
						"client": client,
						"user" : user
					});
				}
			});
		}
	});
};