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
	// console.log("GET USER");
	User.find({
		"$or" : [{
			"username" : username
		},{
			"email" : username
		}]
	}).populate({
		"path" : "currentPage",
		"model" : "Page"
	}).exec((error, userDoc)=>{
		if(error){
			callback(error, null);
		}else if(userDoc[0]){
			// console.log("USER FOUND");
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