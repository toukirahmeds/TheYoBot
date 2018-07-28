/*=============================================
=            Import of npm modules            =
=============================================*/
const mongoose = require("mongoose");
/*=====  End of Import of npm modules  ======*/


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
const MyBusinessController = require("../controllers/business.controller");
/*=====  End of Import of controllers  ======*/


/*=========================================
=            Import of helpers            =
=========================================*/

const fbGraphHelper = require('../helpers/fbGraphHelper');
const fbPageHelper = require('../helpers/fbPageHelper');
const fbPageCategoryHelper = require('../helpers/fbPageCategoryHelper');
const mongooseAssist = require("mongoose-assist");

/*=====  End of Import of helpers  ======*/

/*===================================================
=            Import of default seed data            =
===================================================*/
const HotelBusinessMessageConversation = require("../defaultData/hotelBusinessMessageConversation");
const FoodBusinessMessageConversation = require("../defaultData/foodBusinessMessageConversation");
const TravelBusinessMessageConversation = require("../defaultData/travelBusinessMessageConversation");
const RetailBusinessMessageConversation = require("../defaultData/retailBusinessMessageConversation");

/*=====  End of Import of default seed data  ======*/

/*======================================
=            Custom Helpers            =
======================================*/
const commonCallback = (error, successData)=>{
	if(error) console.error(error);
};
/*=====  End of Custom Helpers  ======*/




module.exports.searchPageByFbId = (fbId, callback)=>{
	Page.find({
		"fbId" : fbId
	}, callback);
};

module.exports.createPage = (pageInfo, callback)=>{
	fbGraphHelper.getLongLivedAccessToken(pageInfo.fbAccessToken, (error, llAccessToken)=>{
		if(error){
			callback(error,null);
		}else{
			pageInfo.fbAccessToken = llAccessToken;
			pageInfo.fbAccessTokenExpiresAt = getPageLongLivedAccessTokenExpiryDate();
			let validation = mongooseAssist.initValidationSave(pageInfo, Page);
			if(validation.errorFound){
				callback(validation.errorFound, null);
			}else{
				validation.newDocument.save((error, pageDoc)=>{
					if(error){
						callback(error, null);
					}else{
						subscribeAppToPage(pageDoc.fbId, llAccessToken, commonCallback);
						pageMessengerPersistentMenu(pageInfo.category, llAccessToken, commonCallback);
						createPredefinedConversation(pageDoc, commonCallback);
						pageMessengerWhitelistDomains(["https://www.theyobot.com"], llAccessToken, commonCallback);
						createPageBusinessInfo(pageDoc, commonCallback);
						callback(null, pageDoc);
					
					}
				});

				
			}
		}
	});
};

const getPageLongLivedAccessTokenExpiryDate = ()=>{
	const dateToday = new Date();
	const twoMonthsTotalMilliseconds = 1000*3600*24*60;
	return expiryDate = new Date(dateToday.getTime() + twoMonthsTotalMilliseconds);
};

const updatePageInfoUsingFbId = module.exports.updatePage = (pageInfo, callback)=>{
 	Page.update({
 		"fbId" : pageInfo.fbId
 	}, pageInfo, callback);
};

const subscribeAppToPage = module.exports.subscribeAppToPage = (pageId, accessToken, callback)=>{
	fbPageHelper.subscribeAppToPage(pageId, accessToken, callback);
};

const unsubscribeAppToPage = module.exports.unsubscribeAppToPage = (pageId, accessToken, callback)=>{
	fbPageHelper.unsubscribeAppToPage(pageId, accessToken, callback);
};

const pageMessengerPersistentMenu = module.exports.pageMessengerPersistentMenu = (pageCategory, accessToken, callback)=>{
	fbPageHelper.updatePageMessengerPersistentMenu(pageCategory, accessToken, callback);
}

const pageMessengerWhitelistDomains = module.exports.pageMessengerWhitelistDomains = (appDomains, pageAccessToken, callback)=>{
	fbPageHelper.whiteListAppDomainMessenger(appDomains, pageAccessToken, callback);
};

const createPredefinedConversation = module.exports.createPredefinedConversation = (pageInfo, callback)=>{
	if( fbPageCategoryHelper.getCategory(pageInfo.category) === fbPageCategoryHelper.HotelBusinessCategory){
		createDefaultConversation(pageInfo, HotelBusinessMessageConversation, callback);
	}else if( fbPageCategoryHelper.getCategory(pageInfo.category) === fbPageCategoryHelper.FoodBusinessCategory){
		createDefaultConversation(pageInfo, FoodBusinessMessageConversation, callback);
	}else if( fbPageCategoryHelper.getCategory(pageInfo.category) === fbPageCategoryHelper.TravelBusinessCategory){
		createDefaultConversation(pageInfo, TravelBusinessMessageConversation, callback);
	}else if( fbPageCategoryHelper.getCategory(pageInfo.category) === fbPageCategoryHelper.RetailBusinessCategory){
		createDefaultConversation(pageInfo, RetailBusinessMessageConversation, callback);
	}
};


const createDefaultConversation = (pageInfo, defaultConversation, callback)=>{
	const templateList = [];
	const automationList = [];
	for(let i=0; i<defaultConversation.length; i++){
		defaultConversation[i]["template"]["_id"] = new mongoose.Types.ObjectId();
		defaultConversation[i]["template"]["page"] = pageInfo._id;
		defaultConversation[i]["template"]["user"] = pageInfo.user;
		defaultConversation[i]["automation"]["_id"] = new mongoose.Types.ObjectId();
		defaultConversation[i]["automation"]["page"] = pageInfo._id;
		defaultConversation[i]["automation"]["user"] = pageInfo.user;
		defaultConversation[i]["automation"]["template"] = defaultConversation[i]["template"]["_id"];
		if(defaultConversation[i]["automation"]["position"] !== defaultConversation[i]["automation"]["previousPosition"]){
			defaultConversation[i]["automation"]["previousAutomation"] = defaultConversation[ defaultConversation[i]["automation"]["previousPosition"] ]["automation"]["_id"];
		}
		templateList.push(defaultConversation[i]["template"]);
		automationList.push(defaultConversation[i]["automation"]);
	}
	TemplateController.createManyTemplates(templateList, callback);
	AutomationController.createManyAutomations(automationList, callback);	
}


const createPageBusinessInfo = (pageInfo, callback)=>{
	MyBusinessController.createMyBusiness({
		name : pageInfo.name,
		category : pageInfo.category,
		page : pageInfo._id,
		user : pageInfo.user
	}, callback);
};

const getPageAbout = module.exports.getPageAbout = (pageId, pageAccessToken, callback)=>{
	// fbPageHelper.pageInfo(pageId, pageAccessToken, callback);
};


