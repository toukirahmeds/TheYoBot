/*=============================================
=            Import of npm modules            =
=============================================*/

const router = require("express").Router();

/*=====  End of Import of npm modules  ======*/


/*=========================================
=            Import of helpers            =
=========================================*/
const responseHelper = require("response-utilities");
const mongooseAssist = require("mongoose-assist");
const fbGraphHelper = require('../helpers/fbGraphHelper');
/*=====  End of Import of helpers  ======*/

/*========================================
=            Import of models            =
========================================*/
const Page = require("../models/Page");


/*=====  End of Import of models  ======*/


/*==========================================
=            Router to get page            =
==========================================*/
router.get("/:id", (req, res)=>{
	Page.findById(req.params.id, (error, pageDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Page data found.", pageDoc);
		}
	});
});


/*=====  End of Router to get page  ======*/

/*==============================================
=            Router to get page list            =
==============================================*/
router.get("/", (req, res)=>{
	let searchQuery = mongooseAssist.initSearchQuery(req.query);
	Page.find(searchQuery.searchFields, searchQuery.queryFields).skip(searchQuery.from).limit(searchQuery.limit).exec((error, pageList)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Page search successfull.", pageList);
		}
	});
});


/*=====  End of Router to get page list  ======*/

/*=============================================
=            Router to create page            =
=============================================*/
router.post("/create", (req, res)=>{
	fbGraphHelper.getLongLivedAccessToken(req.body.fbAccessToken, (error, llAccessToken)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			req.body.fbAccessToken = llAccessToken;
			let validation = mongooseAssist.initValidationSave(req.body, Page);
			if(validation.errorFound){
				return responseHelper.errorResponse(res, null);
			}else{
				validation.newDocument.save((error, pageDoc)=>{
					if(error){
						return responseHelper.errorResponse(res, null);
					}else{
						return responseHelper.successResponse(res, "Page created successfully.", pageDoc);
					}
				});
			}

		}
	});
	
});


/*=====  End of Router to create page  ======*/

/*=============================================
=            Router to update page            =
=============================================*/
router.put("/update/:id", (req, res)=>{
	Page.findByIdAndUpdate(req.params.id, req.body, (error, pageDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Page data updated successfully.", null);
		}
	});
});


/*=====  End of Router to update page  ======*/



/*=============================================
=            Router to delete page            =
=============================================*/
router.delete("/delete/:id", (req, res)=>{
	Page.findByIdAndRemove(req.params.id, (error)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Page deleted successfully.", null);
		}
	});
});


/*=====  End of Router to delete page  ======*/


module.exports = router;