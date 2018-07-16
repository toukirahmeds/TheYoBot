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

const sendMessengerReplies = (messageTemplates, pageAccessToken, subscriberInfo)=>{
	const promiseArray = messageTemplates.map((elem)=>{
		return new Promise((resolve, reject)=>{
			fbMessageHelper.sendMessage(pageAccessToken, "RESPONSE", subscriberInfo.psid, elem, (error, response, body)=>{
				setTimeout(()=>{
					if(error) resolve(error);
					else resolve(body);
				},200)
			});
		});
		
	});

	promiseArray.reduce((promise, task)=>{
		return promise = task.then((result)=>{
			console.log(result);
		});
	}, Promise.resolve());

};


const checkAndGetReply  = (subscriberInfo, message, pageAccessToken, callback)=>{
	fbBotAutomationHelper.getNextFbMessengerReply(subscriberInfo, message, (error, messageTemplates)=>{
		if(error){
			callback(error, null);
		}else{	
			console.log("FOUND BOT AUTOMATIONS");
			console.log(messageTemplates[1]);
			sendMessengerReplies(messageTemplates, pageAccessToken, subscriberInfo);
			
		}
	});
};


module.exports.sendPageMessengerReply = (recipientId, senderId, message, callback)=>{
	console.log(recipientId, senderId, message);
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