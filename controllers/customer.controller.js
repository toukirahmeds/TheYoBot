const Customer = require("../models/Customer");


module.exports.getInfoUsingPage = (pageId, callback)=>{
	Customer.find({
		"page" : pageId
	},(error, customerInfo)=>{
		if(error){
			callback(error, null);
		}else{
			callback(error, customerInfo[0]);
		}
	});
};