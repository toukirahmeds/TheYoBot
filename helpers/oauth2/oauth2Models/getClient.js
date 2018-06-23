/*========================================
=            Import of models            =
========================================*/
const Oauth2Client = require("../models/Oauth2Client");
/*=====  End of Import of models  ======*/


module.exports = (clientId, clientSecret, callback)=>{
	let findObject = {"clientId" : clientId};
	if(clientSecret){
		findObject["clientSecret"] = clientSecret;
	}
	Oauth2Client.find(findObject, (error, clientDoc)=>{
		if(error){
			callback(error, null);
		}else if(clientDoc[0]){
			callback(null, {
				"_id" : clientDoc[0]._id,
				"id" : clientDoc[0]._id.toString(),
				"redirectUris" : clientDoc[0].redirectUris,
				"grants" : clientDoc[0].grantTypes,
				"scope" : clientDoc[0].scope
			});
		}else{
			callback(null,false);
		}
	});
};