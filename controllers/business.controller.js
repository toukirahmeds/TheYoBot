const MyBusiness = require("../models/MyBusiness");
const mongooseAssist = require("mongoose-assist");
const mongoose = require("mongoose");

module.exports.getInfoUsingPage = (pageId, callback)=>{
	MyBusiness.find({
		"page" : pageId
	},callback);
};

module.exports.findMyBusiness = (findQuery, callback)=>{
	MyBusiness.findOne(findQuery, callback);
};

module.exports.createMyBusiness = (businessInfo, callback)=>{
	let validation = mongooseAssist.initValidationSave(businessInfo, MyBusiness);

	if(validation.errorFound){
		callback(validation.errors, null);
	}else{
		validation.newDocument.save(callback);
	}
};


module.exports.updateMyBusiness = (findQuery, businessInfo, callback)=>{
	MyBusiness.findOneAndUpdate(findQuery, businessInfo, callback);
};

module.exports.deleteMyBusiness = (findQuery, callback)=>{
	MyBusiness.findOneAndRemove(findQuery, callback);
};