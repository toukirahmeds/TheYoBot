const router = require("express").Router();

/*=========================================
=            Import of helpers            =
=========================================*/
const responseHelper = require("response-utilities");
const authenticate = require("../helpers/oauth2").authenticate;
/*=====  End of Import of helpers  ======*/

/*=============================================
=            Import of controllers            =
=============================================*/
const FbMessageSubscriberController = require("../controllers/fbMessageSubscriber.controller");


/*=====  End of Import of controllers  ======*/


/*====================================================
=            Router to get a service info            =
====================================================*/
router.get("/details/:pageId/:fbMessageSubscriberId", authenticate(), (req, res)=>{
	FbMessageSubscriberController.getFbMessageSubscriberInfo({
		"_id" : req.params.fbMessageSubscriberId,
		"page" : req.params.pageId
	},(error, serviceDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Fb Subscriber info found successfully.", serviceDoc);
		}
	});
});


/*=====  End of Router to get a service info  ======*/


/*==================================================
=            Router to get service list            =
==================================================*/
router.get("/list/:pageId", authenticate(), (req, res)=>{
	FbMessageSubscriberController.getFbMessageSubscriberList({
		"page" : req.params.pageId
	},(error, fbMessageSubscriberList)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Fb Subscriber list found successfully.", fbMessageSubscriberList);
		}
	});
});


/*=====  End of Router to get service list  ======*/


/*======================================================
=            Router to create a new service            =
======================================================*/
router.post("/create", authenticate(), (req, res)=>{
	req.body.user = req.authentication.user._id;
	FbMessageSubscriberController.createFbMessageSubscriber(req.body,(error, serviceDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Fb Subscriber created successfully.", serviceDoc);
		}
	});
});


/*=====  End of Router to create a new service  ======*/


/*========================================
=            Router to update            =
========================================*/
router.put("/update/:pageId/:fbMessageSubscriberId", authenticate(), (req, res)=>{
	FbMessageSubscriberController.updateFbMessageSubscriber({
		"_id" : req.params.fbMessageSubscriberId,
		"page" : req.params.pageId
	},req.body,(error, updatedServiceDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Fb Subscriber updated successfully.", null);
		}
	});
});


/*=====  End of Router to update  ======*/



/*================================================
=            Router to delete service            =
================================================*/
router.delete("/delete/:pageId/:fbMessageSubscriberId",  authenticate(), (req, res)=>{
	FbMessageSubscriberController.deleteService({
		"_id" : req.params.fbMessageSubscriberId,
		"page" : req.params.pageId
	}, (error, deletedServiceDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Fb Subscriber deleted successfully.", null);
		}
	});
});


/*=====  End of Router to delete service  ======*/


module.exports = router;
