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
const ServiceController = require("../controllers/service.controller");


/*=====  End of Import of controllers  ======*/


/*====================================================
=            Router to get a service info            =
====================================================*/
router.get("/details/:pageId/:serviceId", authenticate(), (req, res)=>{
	ServiceController.getServiceInfo({
		"_id" : req.params.serviceId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	},(error, serviceDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Service info found successfully.", serviceDoc);
		}
	});
});


/*=====  End of Router to get a service info  ======*/


/*==================================================
=            Router to get service list            =
==================================================*/
router.get("/list/:pageId", authenticate(), (req, res)=>{
	ServiceController.getServiceList({
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	},(error, serviceList)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Service list found successfully.", serviceList);
		}
	});
});


/*=====  End of Router to get service list  ======*/


/*======================================================
=            Router to create a new service            =
======================================================*/
router.post("/create", authenticate(), (req, res)=>{
	req.body.user = req.authentication.user._id;
	ServiceController.createService(req.body,(error, serviceDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Service created successfully.", serviceDoc);
		}
	});
});


/*=====  End of Router to create a new service  ======*/


/*========================================
=            Router to update            =
========================================*/
router.post("/update/:pageId/:serviceId", authenticate(), (req, res)=>{
	ServiceController.updateService({
		"_id" : req.params.serviceId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	},req.body,(error, updatedServiceDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Service updated successfully.", null);
		}
	});
});


/*=====  End of Router to update  ======*/



/*================================================
=            Router to delete service            =
================================================*/
router.delete("/delete/:pageId/:serviceId",  authenticate(), (req, res)=>{
	ServiceController.deleteService({
		"_id" : req.params.serviceId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, deletedServiceDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Service deleted successfully.", null);
		}
	});
});


/*=====  End of Router to delete service  ======*/


module.exports = router;
