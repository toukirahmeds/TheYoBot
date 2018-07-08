/*=============================================
=            Import of npm modules            =
=============================================*/
const router  = require("express").Router();


/*=====  End of Import of npm modules  ======*/

/*=========================================
=            Import of helpers            =
=========================================*/
const mongooseAssist = require("mongoose-assist");
const responseUtilities = require("response-utilities");
const authenticate = require("../helpers/oauth2").authenticate;

/*=====  End of Import of helpers  ======*/


/*========================================
=            Import of models            =
========================================*/
const Automation = require("../models/Automation");


/*=====  End of Import of models  ======*/

/*=============================================
=            Import of controllers            =
=============================================*/
const TemplateController = require("../controllers/template.controller");
const AutomationController = require("../controllers/automation.controller");

/*=====  End of Import of controllers  ======*/



/*================================================
=            Router to get automation            =
================================================*/
router.get("/details/:pageId", authenticate(), (req, res)=>{
	Automation.find({
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, automationDoc)=>{
		if(error){
			return responseUtilities.errorResponse(res, null);
		}else{
			return responseUtilities.successResponse(res, "Automation data found.", automationDoc[0]);
		}
	});
});


/*=====  End of Router to get automation  ======*/


/*=====================================================
=            Router to get automation list            =
=====================================================*/
router.get("/list/:pageId/:automationType", authenticate(),(req, res)=>{
	let searchQuery = mongooseAssist.initSearchQuery(req.query);
	Automation.find({
		"$and" : [ searchQuery.searchFields, {
			'page' : req.params.pageId,
			'type' : req.params.automationType,
			'user' : req.authentication.user._id
		}]
	}, searchQuery.queryFields).skip(searchQuery.from).limit(100).populate({
		path : "template",
		model : "Template"
	}).exec((error, automationList)=>{
		if(error){
			return responseUtilities.errorResponse(res, null);
		}else{
			return responseUtilities.successResponse(res, "Automation data found.", automationList);
		}
	});
});


/*=====  End of Router to get automation list  ======*/

/*===================================================
=            Router to create automation            =
===================================================*/
router.post("/create", authenticate(), (req, res)=>{
	req.body.user = req.authentication.user._id;
	if(req.body.template._id){
		req.body.template = req.body.template._id;
		AutomationController.createAutomation(req.body, (error, automationDoc)=>{
			if(error){
				return responseUtilities.errorResponse(res, null);
			}else{
				return responseUtilities.successResponse(res, "Automation created successfully.", automationDoc);
			}
		});
	}else{
		req.body.template.user = req.authentication.user._id;
		TemplateController.createTemplate(req.body.template,(error, templateDoc)=>{
			if(error){
				console.log(error);
				return responseUtilities.errorResponse(res, null);
			}else{
				req.body.template = templateDoc._id;
				AutomationController.createAutomation(req.body, (error, automationDoc)=>{
					if(error){
						return responseUtilities.errorResponse(res, null);
					}else{
						return responseUtilities.successResponse(res, "Automation created successfully.", automationDoc);
					}
				});
			}
		});
	}
});


/*=====  End of Router to create automation  ======*/


/*===================================================
=            Router to update automation            =
===================================================*/
router.put("/update/:pageId", authenticate(), (req, res)=>{
	Automation.update({
		"_id" : req.params.pageId,
		"user" : req.authentication.user._id
	}, req.body, (error, automationDoc)=>{
		if(error){
			return responseUtilities.errorResponse(res, null);
		}else{
			return responseUtilities.successResponse(res, "Automation data updated.", null);
		}
	});
});


/*=====  End of Router to update automation  ======*/

/*===================================================
=            Router to delete automation            =
===================================================*/
router.delete("/delete/:pageId", authenticate(), (req, res)=>{
	Automation.remove({
		"_id" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error)=>{
		if(error){
			return responseUtilities.errorResponse(res, null);
		}else{
			return responseUtilities.successResponse(res, "Automation data deleted.", null);
		}
	});
});
/*=====  End of Router to delete automation  ======*/


module.exports = router;