/*=============================================
=            Import of npm modules            =
=============================================*/
const router = require("express").Router();
const responseUtilities = require("response-utilities");
const mongooseAssist = require("mongoose-assist");
/*=====  End of Import of npm modules  ======*/


/*========================================
=            Import of models            =
========================================*/
const Template = require("../models/Template");


/*=====  End of Import of models  ======*/


/*==============================================
=            Router to get template            =
==============================================*/
router.get("/:id", (req, res)=>{
	Template.findById(req.params.id, (error, templateDoc)=>{
		if(error){
			return responseUtilities.errorResponse(res, null);
		}else{
			return responseUtilities.successResponse(res, "Template data found.", templateDoc);
		}
	});
});


/*=====  End of Router to get template  ======*/


/*===================================================
=            Router to get template list            =
===================================================*/
router.get("/", (req, res)=>{
	let searchQuery = mongooseAssist.initSearchQuery(req.query);
	Template.find(searchQuery.searchFields, searchQuery.queryFields).skip(searchQuery.from).limit(100).exec((error, templateList)=>{
		if(error){
			return responseUtilities.errorResponse(res,null);
		}else{
			return responseUtilities.successResponse(res, "Template data found.", templateList);
		}
	});
});


/*=====  End of Router to get template list  ======*/



/*=================================================
=            Router to create template            =
=================================================*/
router.post("/create", (req, res)=>{
	let validation = mongooseAssist.initValidationSave(req.body, Template);

	if(validation.errorFound){
		console.log(validation.errors);
		return responseUtilities.errorResponse(res, null);
	}else{
		validation.newDocument.save((error, templateDoc)=>{
			if(error){
				return responseUtilities.errorResponse(res, null);
			}else{
				return responseUtilities.successResponse(res, "Template successfully created", templateDoc);
			}
		});
	}
});


/*=====  End of Router to create template  ======*/


/*=================================================
=            Router to update template            =
=================================================*/
router.put("/update/:id", (req, res)=>{
	Template.findByIdAndUpdate(req.params.id, req.body, (error, templateDoc)=>{
		if(error){
			return responseUtilities.errorResponse(res, null);
		}else{
			return responseUtilities.successResponse(res, "Template data successfully updated.", null);
		}
	});
});


/*=====  End of Router to update template  ======*/


/*=================================================
=            Router to delete template            =
=================================================*/
router.delete("/delete/:id", (req, res)=>{
	Template.findByIdAndRemove(req.params.id, (error, templateDoc)=>{
		if(error){
			return responseUtilities.errorResponse(res, null);
		}else{
			return responseUtilities.successResponse(res, "Template data successfully deleted.", null);
		}
	});
});


/*=====  End of Router to delete template  ======*/





module.exports = router;