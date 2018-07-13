/*========================================
=            Import of models            =
========================================*/
const Page = require("../models/Page");
/*=====  End of Import of models  ======*/

/*=============================================
=            Import of controllers            =
=============================================*/
const AutomationController = require("../controllers/automation.controller");
const TemplateController = require("../controllers/template.controller");
/*=====  End of Import of controllers  ======*/


/*=========================================
=            Import of helpers            =
=========================================*/

const fbGraphHelper = require('../helpers/fbGraphHelper');
const fbPageHelper = require('../helpers/fbPageHelper');
const mongooseAssist = require("mongoose-assist");

/*=====  End of Import of helpers  ======*/




module.exports.searchPageByFbId = (fbId, callback)=>{
	Page.find({
		"fbId" : fbId
	}, (error, pageDocs)=>{
		if(error){
			callback(error, null);
		}else if(pageDocs.length){
			callback(null, pageDocs[0]);
		}else{
			callback(null, null);
		}
	});
};

module.exports.createPage = (pageInfo, callback)=>{
	fbGraphHelper.getLongLivedAccessToken(pageInfo.fbAccessToken, (error, llAccessToken)=>{
		if(error){
			callback(error,null);
		}else{
			pageInfo.fbAccessToken = llAccessToken;
			let validation = mongooseAssist.initValidationSave(pageInfo, Page);
			if(validation.errorFound){
				callback(validation.errorFound, null);
			}else{
				validation.newDocument.save((error, pageDoc)=>{
					if(error){
						callback(error, null);
					}else{
						subscribeAppToPage(pageInfo.fbId, llAccessToken, (error, pageSubscriptionInfo)=>{
							
							if(error){
								console.log(error);
							}else{
								console.log(pageSubscriptionInfo);
							}
						});
						pageMessengerPersistentMenu(pageInfo.fbId, pageInfo.category, llAccessToken, (error, updatedPersistentMenuInfo)=>{
							if(error){
								console.log(error);
							}else{
								console.log(updatedPersistentMenuInfo);
							}
						});
						callback(null, pageDoc);
					}
				});

				
			}

		}
	});
};

const updatePageInfo = module.exports.updatePage = (pageInfo, callback)=>{
 	Page.update({
 		"fbId" : pageInfo.fbId
 	}, pageInfo, (error, updatedPageInfo)=>{
 		if(error){
 			callback(error, null);
 		}else{
 			callback(null, updatedPageInfo);
 		}
 	});
};

const subscribeAppToPage = module.exports.subscribeAppToPage = (pageId, accessToken, callback)=>{
	fbPageHelper.subscribeAppToPage(pageId, accessToken, callback);
};

const unsubscribeAppToPage = module.exports.unsubscribeAppToPage = (pageId, accessToken, callback)=>{
	fbPageHelper.unsubscribeAppToPage(pageId, accessToken, callback);
};

const pageMessengerPersistentMenu = module.exports.pageMessengerPersistentMenu = (pageCategory, accessToken, callback)=>{
	fbPageHelper.updatePageMessengerPersistentMenu(pageId, pageCategory, accessToken, callback);
}

const pageMessengerWhitelistUrls = module.exports.pageMessengerWhitelistDomains = (appDomains, pageAccessToken, callback)=>{
	fbPageHelper.whiteListAppDomainMessenger(appDomains, pageAccessToken, callback);
};

const createPredefinedConversation = module.exports.createPredefinedAutomation = (pageInfo, callback)=>{

};
