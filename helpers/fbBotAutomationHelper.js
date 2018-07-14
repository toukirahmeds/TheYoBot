const AutomationController = require("../controllers/automation.controller");
const fbBotMessageFormatHelper = require("./fbBotMessageFormatHelper");
const fbBotMessengerSubscriberHelper = require("./fbBotMessengerSubscriberHelper");
const fbUserHelper = require("./fbUserHelper");

const checkAndGetReply = module.exports.checkAndGetReply = (subscriberInfo, message, pageAccessToken, callback)=>{
	getNextFbMessengerReply(subscriberInfo, message, (error, messageTemplate)=>{
		if(error){
			callback(error, null);
		}else{
			fbMessageHelper.sendMessage(pageAccessToken, "RESPONSE", subscriberInfo.psid, messageTemplate, callback);
		}
	});
};


const getNextFbMessengerReply = module.exports.getNextFbMessengerReply = (subscriberInfo, message, callback)=>{
	const keyword = message.trim().toLowerCase();
	if(subscriberInfo.currentMessengerAutomation){
		AutomationController.getAutomationsWithTemplate({
			"previousAutomation" : subscriberInfo.currentMessengerAutomation
		},(error, automationList)=>{
			if(error){
				callback(error, null);
			}else if(automationList[0] && automationList[0]["trigger"]["triggerKeywords"].indexOf(keyword)>=0){
				getAutomationTriggerMatchedDecision(automationList[0], subscriberInfo, callback);
			}else{
				getAutomationTriggerNotMatchedDecision(automationList[0], subscriberInfo, callback);
			}
		});
	}else{
	    AutomationController.getAutomationsWithTemplate({
	    	"page" :  subscriberInfo.page,
	    	"position" : 0
	    },(error, automationList)=>{
	    	if(error){
	    		callback(error, null);
	    	}else{
	    		fbBotMessengerSubscriberHelper.updateFbMessageSubscriberAutomation(subscriberInfo._id, automationList[0]._id);
	    		callback(null, automationList[0].template);
	    	}
	    });
	}
};

const getAutomationTriggerMatchedDecision = (automation, subscriberInfo)=>{
	if(automation.template.message){
		fbBotMessageFormatHelper.checkVariablesAndFormat(subscriberInfo, automation.template.message, (error, formattedMessage)=>{
			if(error){
				callback(error, null);
			}else{
				let messageTemplate = JSON.parse(JSON.stringify(automation.template));
				messageTemplate["message"] = formattedMessage;
				callback(null, messageTemplate);
			}
		});

	}else{
		callback(null, automation.template);
	}
	fbBotMessengerSubscriberHelper.updateFbMessageSubscriberAutomation(subscriberInfo._id, automation._id);
};




const getAutomationTriggerNotMatchedDecision = (automation, subscriberInfo, callback)=>{
	// fbBotMessengerSubscriberHelper.mistakeMade(subscriberInfo);
};

const getCannotRecogniseMessage = (subscriberInfo, callback)=>{
	callback(null, {
		"templateType" : "generic",
		"title" : "Message Not Recognised",
		"message" : "Sorry "+subscriberInfo.honorific+"! We could not recognise your message."
	});
};

const getLanguageSelectionMessage = (callback)=>{
	callback(null, {
		"type" : "fbMessengerDefault",
		"templateType" : "generic",
		"title" : "Select Language",
		"message" : "Please select your language",
		"quickReplies" : [{
			"contentType":"text",
	        "title":"English",
	        "payload":"english"
		},{
			"contentType" : "text",
			"title" : "Bengali",
			"payload" : "bengali"
		},{
			"contentType" : "text",
			"title" : "Spanish",
			"payload" : "spanish"
		},{
			"contentType" : "text",
			"title" : "Deutsch",
			"payload" : "deutsch"
		},{
			"contentType" : "text",
			"title" : "Hindi",
			"payload" : "hindi"
		},{
			"contentType" : "text",
			"title" : "Japanese",
			"payload" : "japanese"
		},{
			"contentType" : "text",
			"title" : "French",
			"payload" : "french"
		},{
			"contentType" : "text",
			"title" : "Arabic",
			"payload" : "arabic"
		},{
			"contentType" : "text",
			"title" : "Chinese",
			"payload" : "chinese"
		},{
			"contentType" : "text",
			"title" : "Russian",
			"payload" : "russian"
		}]
	});
};

const checkMultiLingual = (message, callback)=>{

};

const checkMessageContainsSlangs = (message, subscriberInfo, callback)=>{
	getSlangsWarningMessage(subscriberInfo, callback);
};


const getSlangsWarningMessage = (subscriberInfo, callback)=>{
	fbBotMessengerSubscriberHelper.badRecordMade(subscriberInfo);
	callback(null, {
		"templateType" : "generic",
		"title" : "Slangs Warning",
		"message" : "Sorry "+subscriberInfo.honorific+"! Please don't use slangs in the conversation."
	});
};



