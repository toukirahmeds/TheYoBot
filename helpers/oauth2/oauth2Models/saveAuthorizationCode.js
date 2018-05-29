/*========================================
=            Import of models            =
========================================*/
const Oauth2AuthorizationCode = require("../models/Oauth2AuthorizationCode");
/*=====  End of Import of models  ======*/


module.exports = (authorizationCode, client, user, callback)=>{
	console.log("Save authorization code");
	console.log(authorizationCode);
	// Oauth2AuthorizationCode.create({
	// 	"authorizationCode" : authorizationCode.authorizationCode,
	// 	"expires" : authorizationCode.expiresAt,
	// 	"redirectUri"  : authorizationCode.redirectUri,
	// 	"scope" : authorizationCode.scope,
	// 	"oauth2Client" : client._id,
	// 	"user" : user._id
	// },(error, authorizationCodeDoc)=>{
	// 	if(error){
	// 		callback(error, null);
	// 	}else{
	// 		callback(null, authorizationCodeDoc);
	// 	}
	// });
};