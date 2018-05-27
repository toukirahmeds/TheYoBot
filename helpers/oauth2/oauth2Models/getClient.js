/*========================================
=            Import of models            =
========================================*/
const Oauth2Client = require("../models/Oauth2Client");
/*=====  End of Import of models  ======*/


module.exports = (clientId, clientSecret, callback)=>{
	Oauth2Client.find({
		"clientId" : clientId,
		"clientSecret" : clientSecret
	}, (error, clientDoc)=>{
		if(error){
			callback(error, null);
		}else{
			callback(null, {
				"id" : clientDoc._id.toString(),
				"redirectUris" : clientDoc.redirectUri,
				"grants" : clientDoc.grantTypes
			});
		}
	});
};