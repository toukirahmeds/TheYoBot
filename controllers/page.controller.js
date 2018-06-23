/*========================================
=            Import of models            =
========================================*/
const Page = require("../models/Page");
/*=====  End of Import of models  ======*/

/*=========================================
=            Import of helpers            =
=========================================*/

const fbGraphHelper = require('../helpers/fbGraphHelper');
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
						callback(null, pageDoc);
					}
				});
			}

		}
	});
};

