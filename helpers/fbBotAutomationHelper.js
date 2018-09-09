const AutomationController = require("../controllers/automation.controller");
const fbBotMessageFormatHelper = require("./fbBotMessageFormatHelper");
const fbBotMessengerSubscriberHelper = require("./fbBotMessengerSubscriberHelper");
const fbBotPageTypeHelpers = require("./fbBotPageTypeHelpers");
const fbBusinessKeywords = require("./fbBusinessKeywords");
const franc = require("franc");


const getNextFbMessengerReply = module.exports.getNextFbMessengerReply = (subscriberInfo, message, callback)=>{
	// console.log("getNextFbMessengerReply");
	// console.log(message);
	let keyword;
	if(subscriberInfo.language && subscriberInfo.language.currentLanguage){
		keyword = formatRequestKeyword(message);
		if(subscriberInfo.currentMessengerAutomation && keyword){
			AutomationController.getAutomationsWithTemplate({
				"previousAutomation" : subscriberInfo.currentMessengerAutomation
			},(error, automationList)=>{
				if(error){
					callback(error, null);
				}else if(automationList[0] && automationList[0]["trigger"]["triggerKeywords"].indexOf(keyword)>=0){
					getAutomationTriggerMatchedDecision(automationList, subscriberInfo, callback);
				}else{
					console.log("previous message not found");
					let tempAutomationList = [{
						"trigger" : {
							"triggerKeywords" : [keyword]
						}
					}];
					getBusinessDecision(tempAutomationList, subscriberInfo, callback);
					// getAutomationTriggerNotMatchedDecision(automationList, subscriberInfo, callback);
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
		
	}else{
		getLanguageSelectionDecision(subscriberInfo, message, callback);
	}
};

const checkKeywordMatched = (keyword)=>{
	let keywordList = Object.values(fbBusinessKeywords);
	for(let i in keywordList){
		if(keyword.indexOf(keywordList[i])>=0) return true;
	}

	return false;
};

const formatRequestKeyword = (message)=>{
	// console.log("formatRequestKeyword");
	// console.log(message);

	if(message.quick_reply && message.quick_reply.payload) return message.quick_reply.payload.trim().toLowerCase();
	else if(message.payload) return message.payload.trim().toLowerCase();
	else if(message.text) return message.text.trim().toLowerCase();
	else if(message.attachments){
		console.log(message.attachments[0]);
		if(message.attachments[0] && message.attachments[0].payload){
			return message.attachments[0].payload;
		}	
	}
};

const getAutomationTriggerMatchedDecision = (automationList, subscriberInfo, callback)=>{
	console.log("getAutomationTriggerMatchedDecision");
	if(automationList[0].template.message){
		getFormattedAutomationMessage(automationList, subscriberInfo, callback);
	}else{
		getBusinessDecision(automationList, subscriberInfo, callback);
		
	}
	fbBotMessengerSubscriberHelper.updateFbMessageSubscriberAutomation(subscriberInfo._id, automationList[0]._id);
};


const getNoCurrentAutomationDecision = (automationList, subscriberInfo, callback)=>{
	getFormattedAutomationMessage(automationList, subscriberInfo, callback);
};

const getBusinessDecision = (automationList, subscriberInfo, callback)=>{
	fbBotPageTypeHelpers(subscriberInfo.page.category, automationList, subscriberInfo, (error, result)=>{
		callback(null, result);
	});
}

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

const getLanguageSelectionDecision = (subscriberInfo, message, callback)=>{
	if(subscriberInfo.infoQuery){
		const language = formatRequestKeyword(message);
		if(subscriberInfo.infoQuery.trim().toLowerCase() === "languageSelection".trim().toLowerCase()){
			subscriberInfo["infoQuery"] = null;
			subscriberInfo["language"] = {
				"primary" : language,
				"currentLanguage" : language
			};
			fbBotMessengerSubscriberHelper.updateFbMessageSubscriber(subscriberInfo._id, subscriberInfo);
			getNextFbMessengerReply(subscriberInfo, message, callback);
		}
	}else{
		askLanguageSelection(subscriberInfo, callback);
	}
};

const askLanguageSelection = (subscriberInfo, callback)=>{
	fbBotMessengerSubscriberHelper.updateFbMessageSubscriber(subscriberInfo._id, {
		"infoQuery" : "languageSelection"
	});
	getLanguageSelectionMessage(callback);
};

const getLanguageSelectionMessage = (callback)=>{
	callback(null, [{
		"type" : "fbMessengerDefault",
		"templateType" : "generic",
		"title" : "Select Language",
		"message" : "Please select your language",
		"quickReplies" : [{
			"content_type":"text",
	        "title":"English",
	        "payload":"english"
		},{
			"content_type" : "text",
			"title" : "Bengali",
			"payload" : "bengali"
		},{
			"content_type" : "text",
			"title" : "Spanish",
			"payload" : "spanish"
		},{
			"content_type" : "text",
			"title" : "Deutsch",
			"payload" : "deutsch"
		},{
			"content_type" : "text",
			"title" : "Hindi",
			"payload" : "hindi"
		},{
			"content_type" : "text",
			"title" : "Japanese",
			"payload" : "japanese"
		},{
			"content_type" : "text",
			"title" : "French",
			"payload" : "french"
		},{
			"content_type" : "text",
			"title" : "Arabic",
			"payload" : "arabic"
		},{
			"content_type" : "text",
			"title" : "Chinese",
			"payload" : "chinese"
		},{
			"content_type" : "text",
			"title" : "Russian",
			"payload" : "russian"
		}]
	}]);
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



