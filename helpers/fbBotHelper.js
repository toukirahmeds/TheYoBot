
/*=========================================
=            Import of helpers            =
=========================================*/
const fbMessageHelper = require("./fbMessageHelper");
const fbUserHelper = require("./fbUserHelper");

/*=====  End of Import of helpers  ======*/


/*========================================
=            Import of models            =
========================================*/
const Page = require('../models/Page');
const Automation = require('../models/Automation');
const FbMessageSubscriber = require('../models/FbMessageSubscriber');
/*=====  End of Import of models  ======*/


const formatTemplateMessage = (subscriberInfo, message)=>{
	if(message.indexOf("{{firstName}}")>=0){
		message = message.replace("{{firstName}}", subscriberInfo.firstName);
	}

	if(message.indexOf("{{lastName}}")>=0){
		message = message.replace("{{lastName}}", subscriberInfo.lastName);
	}

	if(message.indexOf("{{salutation}}")>=0){
		message = message.replace("{{salutation}}", subscriberInfo.gender == "male"?'Mr':'Miss');
	}
	return message;

};

const findAutomation = (pageId, message, subscriberInfo, callback)=>{
	let keyword = message.text.trim().toLowerCase();
	if(subscriberInfo.currentMessengerAutomation!= null || subscriberInfo.currentMessengerAutomation!= undefined){
		// callback(null, false);
		Automation.find({
			"previousAutomation" : subscriberInfo.currentMessengerAutomation,
			"trigger.triggerKeyword" : keyword
		}).populate({
			"path" : "template",
			"model" : "Template"
		}).exec((error, automationDoc)=>{
			if(error){
				callback(error, null);
			}else if(automationDoc.length){
				// console.log(automationDoc)
				if(automationDoc.template && automationDoc.template.message){
					automationDoc.template.message = formatTemplateMessage(subscriberInfo, automationDoc.template.message);
				}
				callback(null, automationDoc);
			}else{
				Automation.find({
					"previousAutomation" : subscriberInfo.currentMessengerAutomation
				}).populate({
					"path" : "template",
					"model" : "Template"
				}).exec((error, automationList)=>{
					if(error){
						console.log(error);
						callback(error, null);
					}else{
						let notMatchedAutomation;
						automationList.forEach((elem)=>{
							if(!elem.trigger || !(elem.trigger && elem.trigger.triggerKeyword.length)){
								notMatchedAutomation = elem;
							}
						});
						if(notMatchedAutomation){
							// updateSubscriberMessageAutomation(subscriberInfo, undefined);
							callback(null, [notMatchedAutomation], true);
						}else{
							callback(null, [])
						}

					}
				});
			}
		});
	}else{
		Automation.findOne({
			page : pageId,
			position : 0
		}).populate({
			path : 'template',
			model : 'Template'
		}).exec((error, automationDoc)=>{
			if(error){
				callback(error, null);
			}else if(automationDoc){
				// console.log(automationDoc);
				if(automationDoc.template && automationDoc.template.message){
					automationDoc.template.message = formatTemplateMessage(subscriberInfo, automationDoc.template.message);
				}
				callback(null, [automationDoc]);
			}else{
				callback(null, false);
			}
		});
	}
};

const updateSubscriberMessageAutomation = (subscriberInfo, automationId)=>{
	FbMessageSubscriber.findByIdAndUpdate(subscriberInfo._id, {
		"currentMessengerAutomation" : automationId
	}, (error, updatedAutomation)=>{
		if(error){
			console.log(error);
		}else{
			// console.log("AUTOMATION UPDATED");
			// console.log(updatedAutomation);
		}
	});
};

const saveMessage = ()=>{};

const saveSenderInfo = (senderInfo, callback)=>{
	FbMessageSubscriber.create(senderInfo,(error, fbMessageSubscriberDoc)=>{
		if(error){
			// console.log(error);
			callback(error, null);
		}else{
			// console.log(fbMessageSubscriberDoc);
			callback(null, fbMessageSubscriberDoc);
		}
	});
};


const getFbSenderInfo = (senderId, pageAccessToken, callback)=>{
	fbUserHelper.getSenderInfo(pageAccessToken, senderId,(error, senderInfo)=>{
		if(error){
			callback(error, null);
		}else{
			saveSenderInfo(senderInfo, (error, savedSenderInfo)=>{
				if(error){
					callback(error, null);
				}else{
					callback(null, savedSenderInfo);
				}
			});
		}
	});
};

const checkSenderInfo = (senderId, pageAccessToken, callback)=>{
	FbMessageSubscriber.find({'psid' : senderId},(error, FbMessageSubscriberDoc)=>{
		if(error){
			console.log(error);
			callback(error, null);
		}else if(FbMessageSubscriberDoc[0]){
			// console.log("SENDER ALREADY EXISTS");
			callback(null, FbMessageSubscriberDoc[0]);
		}else{
			getFbSenderInfo(senderId, pageAccessToken, (error, newSubscriberInfo)=>{
				if(error){
					callback(error, null);
				}else{
					callback(null, newSubscriberInfo);
					
				}
			});
		}
	});
};


module.exports.sendPageReply = (recipientId, senderId, message, callback)=>{
	// console.log("FB BOT SEND PAGE REPLY");
	// console.log(recipientId, senderId, message);
	Page.find({"fbId" : recipientId}, (error, pageDoc)=>{
		if(error){
			console.log(error);
		}else if(pageDoc[0]){
			// console.log("PAGE FOUND");
			checkSenderInfo(senderId, pageDoc[0].fbAccessToken, (error, subscriberInfo)=>{
				if(error){
					console.log(error);
				}else{
					if(message){
						findAutomation(pageDoc[0]._id, message, subscriberInfo, (error, automations, reset)=>{
							if(error){
								callback(true);
							}else if(automations.length){
								callback(true);
								let templates = [];
								automations.forEach((elem)=>{
									templates.push(elem.template);
								});
								fbMessageHelper.sendMessage(pageDoc[0].fbAccessToken, "RESPONSE", senderId, templates, (result)=>{
									if(result){
										callback(true);
									}
									if(reset){
										updateSubscriberMessageAutomation(subscriberInfo, undefined);
									}else{
										updateSubscriberMessageAutomation(subscriberInfo, automations[automations.length-1]._id);
									}
								});

							}else{
								// console.log("NO AUTOMATION FOUND");
								updateSubscriberMessageAutomation(subscriberInfo, undefined);
								callback(true);
							}
						});
						
					}
				}
			});
		}else{
			console.log('No Page found');
			callback(true);
		}
	});
}