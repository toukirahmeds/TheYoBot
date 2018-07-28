/*=============================================
=            Import of npm modules            =
=============================================*/

const router = require("express").Router();

/*=====  End of Import of npm modules  ======*/


/*=========================================
=            Import of helpers            =
=========================================*/
const responseHelper = require("response-utilities");
const authenticate = require("../helpers/oauth2").authenticate;
/*=====  End of Import of helpers  ======*/

/*========================================
=            Import of models            =
========================================*/
const Page = require("../models/Page");


/*=====  End of Import of models  ======*/

/*=============================================
=            Import of controllers            =
=============================================*/
const PageController = require("../controllers/page.controller");


/*=====  End of Import of controllers  ======*/



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
router.post("/create", authenticate(),(req, res)=>{
	PageController.searchPageByFbId(req.body.fbId,(error, pageSearchResult)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else if(pageSearchResult[0]){
			if(pageSearchResult[0].user.toString() === req.authentication.user._id.toString()){
				return responseHelper.successResponse(res, "Page already exists and connecting to the page", pageSearchResult[0]);
			}else{
				return responseHelper.conflictResponse(res, "Sorry Page is already being used by another user.", null);	
			}
		}else{
			req.body.user = req.authentication.user._id;
			PageController.createPage(req.body,(error, pageDoc)=>{
				if(error){
					return responseHelper.errorResponse(res, null);
				}else{
					return responseHelper.successResponse(res, "Page created successfully.", pageDoc);
				}
			});
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