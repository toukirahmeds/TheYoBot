const FbMessageSubscriber = require("../models/FbMessageSubscriber");

module.exports.getInfoUsingPage = (pageId, callback)=>{
	FbMessageSubscriber.find({
		"page" : pageId
	},(error, fbMessageSubscriberInfo)=>{
		if(error){
			callback(error, null);
		}else{
			callback(error, fbMessageSubscriberInfo[0]);
		}
	});
};