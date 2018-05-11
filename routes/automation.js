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


/*=====  End of Import of helpers  ======*/


/*========================================
=            Import of models            =
========================================*/
const Automation = require("../models/Automation");


/*=====  End of Import of models  ======*/


/*================================================
=            Router to get automation            =
================================================*/
router.get("/:id", (req, res)=>{
	Automation.findById(req.params.id, (error, automationDoc)=>{
		if(error){
			return responseUtilities.errorResponse(res, null);
		}else{
			return responseUtilities.successResponse(res, "Automation data found.", automationDoc);
		}
	});
});


/*=====  End of Router to get automation  ======*/


/*=====================================================
=            Router to get automation list            =
=====================================================*/
router.get("/", (req, res)=>{
	let searchQuery = mongooseAssist.initSearchQuery(req.query);
	Automation.find({
		"$and" : [ searchQuery.searchFields, {
			'page' : req.query.page
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
router.post("/create", (req, res)=>{
	let validation = mongooseAssist.initValidationSave(req.body, Automation);
	if(validation.errorFound){
		console.log(validation.errors);
		return responseUtilities.errorResponse(res, null);
	}else{
		validation.newDocument.save((error, automationDoc)=>{
			if(error){
				return responseUtilities.errorResponse(res, null);
			}else{
				return responseUtilities.successResponse(res, "Automation created successfully.", automationDoc);
			}
		});
	}
});


/*=====  End of Router to create automation  ======*/


/*===================================================
=            Router to update automation            =
===================================================*/
router.put("/update/:id", (req, res)=>{
	Automation.findByIdAndUpdate(req.params.id, req.body, (error, automationDoc)=>{
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
router.delete("/delete/:id", (req, res)=>{
	Automation.findByIdAndRemove(req.params.id, (error)=>{
		if(error){
			return responseUtilities.errorResponse(res, null);
		}else{
			return responseUtilities.successResponse(res, "Automation data deleted.", null);
		}
	});
});
/*=====  End of Router to delete automation  ======*/


module.exports = router;