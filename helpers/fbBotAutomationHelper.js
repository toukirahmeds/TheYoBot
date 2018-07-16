const AutomationController = require("../controllers/automation.controller");
const fbBotMessageFormatHelper = require("./fbBotMessageFormatHelper");
const fbBotMessengerSubscriberHelper = require("./fbBotMessengerSubscriberHelper");
const promiseHelper = require("./promiseHelper");



const getNextFbMessengerReply = module.exports.getNextFbMessengerReply = (subscriberInfo, message, callback)=>{
	console.log(message);
	let keyword = "";
	if(message){
		if(message.quick_reply && message.quick_reply.payload) keyword = message.quick_reply.payload.trim().toLowerCase();
		else if(message.text) keyword = message.text.trim().toLowerCase();
	}
	// if(message.text) keyword = message.text.trim().toLowerCase();
	if(subscriberInfo.currentMessengerAutomation && keyword){
		AutomationController.getAutomationsWithTemplate({
			"previousAutomation" : subscriberInfo.currentMessengerAutomation
		},(error, automationList)=>{
			if(error){
				callback(error, null);
			}else if(automationList[0] && automationList[0]["trigger"]["triggerKeywords"].indexOf(keyword)>=0){
				getAutomationTriggerMatchedDecision(automationList, subscriberInfo, callback);
			}else{
				getAutomationTriggerNotMatchedDecision(automationList, subscriberInfo, callback);
			}
		});
	}else{
	    AutomationController.getAutomationsWithTemplate({
	    	"page" :  subscriberInfo.page,
	    	"previousAutomation" : null
	    },(error, automationList)=>{
	    	if(error){
	    		callback(error, null);
	    	}else{
	    		fbBotMessengerSubscriberHelper.updateFbMessageSubscriberAutomation(subscriberInfo._id, automationList[automationList.length-1]._id);
	    		getNoCurrentAutomationDecision(automationList, subscriberInfo, callback);
	    	}
	    });
	}
};

const getAutomationTriggerMatchedDecision = (automationList, subscriberInfo, callback)=>{
	if(automationList[0].template.message){
		getFormattedAutomationMessage(automationList, subscriberInfo, callback);

	}else{
		callback(null, [automationList[0].template]);
	}
	fbBotMessengerSubscriberHelper.updateFbMessageSubscriberAutomation(subscriberInfo._id, automationList[0]._id);
};


const getNoCurrentAutomationDecision = (automationList, subscriberInfo, callback)=>{
	getFormattedAutomationMessage(automationList, subscriberInfo, callback);
};

const getFormattedAutomationMessage = (automationList, subscriberInfo, callback)=>{
	let promiseArray = [];
	for(let i = 0; i< automationList.length; i++){
		promiseArray.push(fbBotMessageFormatHelper.formatTemplateMessage(automationList[i].template.message, subscriberInfo));
	}
	Promise.all(promiseArray).then((result)=>{
		callback(null,result.map((elem, index)=>{
			automationList[index].template.message = elem;
			return automationList[index].template;
		}));
	});
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



