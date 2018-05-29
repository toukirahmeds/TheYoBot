/*========================================
=            Import of models            =
========================================*/
const Oauth2AccessToken = require("../models/Oauth2AccessToken");

/*=====  End of Import of models  ======*/


module.exports = (accessToken, callback)=>{
	console.log("REVOKE TOKEN");
	Oauth2AccessToken.remove({
		"accessToken" : accessToken
	},(error, accessTokenDoc)=>{
		if(error){
			callback(error, null);
		}else if(accessTokenDoc){
			callback(null, true);
		}else{
			callback(null, false);
		}
	});
};