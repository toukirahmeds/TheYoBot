/*=============================================
=            Import of npm modules            =
=============================================*/
const jwt  = require("jsonwebtoken");


/*=====  End of Import of npm modules  ======*/
/*========================================
=            Import of config            =
========================================*/
const config = require("../../../config/config.json");


/*=====  End of Import of config  ======*/


module.exports = (client, user, scope, callback)=>{
	// console.log("GENERATE REFRESH TOKEN");
	callback(
		null, 
		jwt.sign({
			"client" : client,
			"user" : user,
			"scope" : scope
			}, 
			config.jwt.refreshTokenSecret, 
			{"expiresIn":config.jwt.refreshTokenExpiresIn}
		)
	);
};