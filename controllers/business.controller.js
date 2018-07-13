const MyBusiness = require("../models/MyBusiness");

module.exports.getInfoUsingPage = (pageId, callback)=>{
	MyBusiness.find({
		"page" : pageId
	},(error, businessInfo)=>{
		if(error){
			callback(error, null);
		}else{
			callback(error, businessInfo[0]);
		}
	});
};