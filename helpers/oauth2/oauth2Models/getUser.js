/*=============================================
=            Import of npm modules            =
=============================================*/
const bcrypt = require("bcrypt-nodejs");


/*=====  End of Import of npm modules  ======*/


/*========================================
=            Import of models            =
========================================*/
const User = require("../../../models/User");
/*=====  End of Import of models  ======*/


module.exports = (username, password, callback)=>{
	User.find({
		"$or" : [{
			"username" : username
		},{
			"email" : username
		}]
	},(error, userDoc)=>{
		if(error){
			callback(error, null);
		}else if(userDoc[0]){
			if(bcrypt.compareSync(password, userDoc[0]['password'])){
				callback(null, userDoc[0]);
			}else{
				callback(null, null);
			}
		}else{
			callback(null, null);
		}
	});
};