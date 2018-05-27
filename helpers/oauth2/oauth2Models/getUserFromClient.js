/*========================================
=            Import of models            =
========================================*/
const User = require("../../../models/User");
/*=====  End of Import of models  ======*/


module.exports = (client, callback)=>{
	User.findById(client.user,(error, userDoc)=>{
		if(error){
			callback(error, null);
		}else{
			callback(null, userDoc[0]);
		}
	});
};