const FbMessageSubscriber = require("../models/FbMessageSubscriber");
const mongooseAssist = require("mongoose-assist");

module.exports.getFbMessageSubscriberList = (findQuery, callback)=>{
	FbMessageSubscriber.find(findQuery, callback);
};

module.exports.getFbMessageSubscriberInfo = (findQuery, callback)=>{
	FbMessageSubscriber.find(findQuery, callback);
};

module.exports.getInfoUsingPsid = (psid, pageId, callback)=>{
	FbMessageSubscriber.find({
		"psid" : psid,
		"page" : pageId
	}).populate({
		"path" : "page",
		"model" : "Page"
	}).exec(callback);
};

module.exports.createFbMessageSubscriber = (fbMessageSubscriberInfo, callback)=>{
	if(fbMessageSubscriberInfo["gender"].trim().toLowerCase() === "male"){
		fbMessageSubscriberInfo["salutation"] = "Mr";
		fbMessageSubscriberInfo["honorific"] = "Sir";
	}else{
		fbMessageSubscriberInfo["salutation"] = "Ms";
		fbMessageSubscriberInfo["honorific"] = "Madam";
	}
	let validation = mongooseAssist.initValidationSave(fbMessageSubscriberInfo, FbMessageSubscriber);

	if(validation.errorFound){
		callback("Errors", null);
	}else{
		validation.newDocument.save(callback);
	}
};


module.exports.updateFbMessageSubscriber = (fbMessageSubscriberId, updateData,  callback)=>{
	FbMessageSubscriber.findByIdAndUpdate(fbMessageSubscriberId, updateData, callback);
};


