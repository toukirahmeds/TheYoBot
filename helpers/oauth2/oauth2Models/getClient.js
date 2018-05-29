/*========================================
=            Import of models            =
========================================*/
const Oauth2Client = require("../models/Oauth2Client");
/*=====  End of Import of models  ======*/


module.exports = (clientId, clientSecret, callback)=>{
	console.log("GET Client");
	let findObject = {"clientId" : clientId};
	if(clientSecret){
		findObject["clientSecret"] = clientSecret;
	}
	Oauth2Client.find(findObject, (error, clientDoc)=>{
		if(error){
			callback(error, null);
		}else if(clientDoc[0]){
			console.log("Client Found");
			callback(null, {
				"id" : clientDoc[0]._id.toString(),
				"redirectUris" : clientDoc[0].redirectUris,
				"grants" : clientDoc[0].grantTypes
			});
		}else{
			console.log("Client Not Found");
			callback(null,false);
		}
	});
};