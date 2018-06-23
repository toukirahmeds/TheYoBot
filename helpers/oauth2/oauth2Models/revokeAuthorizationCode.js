/*========================================
=            Import of models            =
========================================*/
const Oauth2AuthorizationCode = require("../models/Oauth2AuthorizationCode");
/*=====  End of Import of models  ======*/


module.exports = (authorizationCode, callback)=>{
	Oauth2AuthorizationCode.remove({
		"authorizationCode": authorizationCode.authorizationCode
	}, (error, authorizationCodeDoc)=>{
		if(error){
			callback(error, null);
		}else if(authorizationCodeDoc){
			callback(null, true);
		}else{
			callback(null, false);
		}
	});
};