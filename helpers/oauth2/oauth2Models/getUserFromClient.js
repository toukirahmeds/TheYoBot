


/*========================================
=            Import of models            =
========================================*/
const Oauth2Client = require("../models/Oauth2Client");
/*=====  End of Import of models  ======*/


module.exports = (client, callback)=>{
	Oauth2Client.findById(client.id).populate({
		"model" : "User",
		"path" : "user"
	}).exec((error, clientDoc)=>{
		if(error){
			callback(error, null);
		}else if(clientDoc){
			callback(null, clientDoc.user);
		}else{
			callback(null, false);
		}
	});
};