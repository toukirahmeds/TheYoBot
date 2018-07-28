/*=========================================
=            Import of helpers            =
=========================================*/
const fbBotMessengerSubscriberHelper = require("./fbBotMessengerSubscriberHelper");
const fbBotAutomationHelper = require("./fbBotAutomationHelper");
const fbMessageHelper = require("./fbMessageHelper");
/*=====  End of Import of helpers  ======*/


/*========================================
=            Import of models            =
========================================*/
const PageController = require("../controllers/page.controller");
/*=====  End of Import of models  ======*/

const sendMessengerReplies = (messageTemplates, pageAccessToken, subscriberInfo, callback, messageTemplateCount)=>{
	fbMessageHelper.sendMessage(pageAccessToken, "RESPONSE", subscriberInfo.psid, messageTemplates[0], (error, messageSentDoc)=>{
		if(error){
			callback(error, null);
		}else{
			messageTemplateCount--;
			if(messageTemplateCount<=0){
				callback(null, {
					"success" : true
				});
			}else{
				sendMessengerReplies(messageTemplates.slice(1, messageTemplates.length), pageAccessToken, subscriberInfo, callback, messageTemplateCount);
			}
		}		
	});
};


const checkAndGetReply  = (subscriberInfo, message, pageAccessToken, callback)=>{
	fbBotAutomationHelper.getNextFbMessengerReply(subscriberInfo, message, (error, messageTemplates)=>{
		if(error){
			callback(error, null);
		}else{	
			sendMessengerReplies(messageTemplates, pageAccessToken, subscriberInfo, callback, messageTemplates.length);
		}
	});
};

// const askForLanguageSelect = (subscriberInfo, pageAccessToken, callback)=>{
	
// };


module.exports.sendPageMessengerReply = (recipientId, senderId, message, callback)=>{
	PageController.searchPageByFbId(recipientId, (error, pageDoc)=>{
		if(error){
			callback(error, null);
		}else if(pageDoc[0]){
			fbBotMessengerSubscriberHelper.checkSubscriber(senderId, pageDoc[0], (error, fbMessageSubscriberDoc)=>{
				if(error){
					callback(error, null);
				}else{
					checkAndGetReply(fbMessageSubscriberDoc, message, pageDoc[0].fbAccessToken, callback);
				}
			});
			
		}else{
			callback(null, null);
		}
	});
}