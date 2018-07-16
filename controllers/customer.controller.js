const Customer = require("../models/Customer");
const mongooseAssist = require("mongoose-assist");


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