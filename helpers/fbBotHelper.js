/*=========================================
=            Import of helpers            =
=========================================*/
const fbBotMessengerSubscriberHelper = require("./fbBotMessengerSubscriberHelper");
const fbBotAutomationHelper = require("./fbBotAutomationHelper");
/*=====  End of Import of helpers  ======*/


/*========================================
=            Import of models            =
========================================*/
const PageController = require("../controllers/page.controller");
/*=====  End of Import of models  ======*/


module.exports.sendPageMessengerReply = (recipientId, senderId, message, callback)=>{
	PageController.searchPageByFbId(recipientId, (error, pageDoc)=>{
		if(error){
			callback(error, null);
		}else if(pageDoc[0]){
			fbBotMessengerSubscriberHelper.checkSubscriber(senderId, pageDoc[0], (error, fbMessageSubscriberDoc)=>{
				if(error){
					callback(error, null);
				}else{
					fbBotAutomationHelper.checkAndGetReply(fbMessageSubscriberDoc, message, callback);
				}
			});
			
		}else{
			callback(null, null);
		}
	});
}