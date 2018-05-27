/*========================================
=            Import of models            =
========================================*/
const User = require("../../../models/User");
/*=====  End of Import of models  ======*/


module.exports = (username, password, callback)=>{
	User.find({
		"username" : username,
		"password" : password
	},(error, userDoc)=>{
		if(error){
			callback(error, null);
		}else{
			callback(null, userDoc[0]);
		}
	});
};