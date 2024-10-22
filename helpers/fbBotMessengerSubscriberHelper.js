const fbMessageSubscriberController = require("../controllers/fbMessageSubscriber.controller");
const fbUserHelper = require("./fbUserHelper");

const commonCallback = (error, resultDoc)=>{
	if(error) console.error(error);
};

module.exports.checkSubscriber = (subscriberPsid, pageInfo, callback)=>{
	fbMessageSubscriberController.getInfoUsingPsid(subscriberPsid, pageInfo._id, (error, fbMessageSubscriberDoc)=>{
		if(error){
			callback(error, null);
		}else if(fbMessageSubscriberDoc[0]){
			callback(null, fbMessageSubscriberDoc[0]);
		}else{
			getFbMessageSubscriberInfo(subscriberPsid, pageInfo, callback);
		}
	});
};

const getFbMessageSubscriberInfo = module.exports.getFbMessageSubscriberInfo = (subscriberPsid, pageInfo, callback)=>{
	fbUserHelper.getSenderInfo(pageInfo.fbAccessToken, subscriberPsid, (error, subscriberInfo)=>{
		if(error){
			callback(error, null);
		}else{
			subscriberInfo["page"] = pageInfo._id;
			saveFbMessageSubscriberInfo(subscriberInfo, callback);
		}
	});
};

const saveFbMessageSubscriberInfo = module.exports.saveFbMessageSubscriberInfo = (subscriberInfo, callback)=>{
	fbMessageSubscriberController.createFbMessageSubscriber(subscriberInfo, callback);
};

const updateFbMessageSubscriber = module.exports.updateFbMessageSubscriber = (subscriberId, updateData)=>{
	fbMessageSubscriberController.updateFbMessageSubscriber(subscriberId, updateData, commonCallback);
};


const updateFbMessageSubscriberCurrentLanguage = module.exports.updateFbMessageSubscriberCurrentLanguage = (subscriberId, currentLanguage, callback)=>{
	fbMessageSubscriberController.updateFbMessageSubscriber(subscriberId, {
		"language" : {
			"primary" : currentLanguage,
			"currentLanguage" : currentLanguage
		} 
	}, commonCallback);	
};

const updateFbMessageSubscriberAutomation = module.exports.updateFbMessageSubscriberAutomation = (subscriberId, automationId, callback)=>{
	fbMessageSubscriberController.updateFbMessageSubscriber(subscriberId, {
		"currentMessengerAutomation" : automationId
	}, commonCallback);
};

const updateFbMessageSubscriberLanguage = module.exports.updateFbMessageSubscriberLanguage = (subscriberId, languageUpdate)=>{
	fbMessageSubscriberController.updateFbMessageSubscriber(subscriberId, languageUpdate, commonCallback);
};

const updateFbMessageSubscriberInfoQuery = module.exports.updateFbMessageSubscriberInfoQuery = (subscriberInfo, infoQuery)=>{
	fbMessageSubscriberController.updateFbMessageSubscriber(subscriberId, infoQuery);
};

const mistakeMade = module.exports.mistakeMade = (subscriberInfo)=>{

};

const badRecordMade = module.exports.badRecordMade = (subscriberInfo)=>{
	
};
