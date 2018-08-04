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
const OrderController = require("../controllers/order.controller");


/*=====  End of Import of controllers  ======*/


/*====================================================
=            Router to get a order info            =
====================================================*/
router.get("/details/:pageId/:orderId", authenticate(), (req, res)=>{
	OrderController.getOrderInfo({
		"_id" : req.params.orderId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, orderInfo)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Order info found successfully.", orderInfo);
		}
	});
});


/*=====  End of Router to get a order info  ======*/


/*==================================================
=            Router to get order list            =
==================================================*/
router.get("/list/:pageId", authenticate(), (req, res)=>{
	OrderController.getOrderList({
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, orderList)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Order list found successfully.", orderList);
		}
	});
});


/*=====  End of Router to get order list  ======*/


/*======================================================
=            Router to create a new order            =
======================================================*/
router.post("/create", authenticate(), (req, res)=>{
	req.body.user = req.authentication.user._id;
	OrderController.createOrder( req.body, (error, orderDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Order created successfully.", orderDoc);
		}
	});
});
/*=====  End of Router to create a new order  ======*/


/*========================================
=            Router to update            =
========================================*/
router.post("/update/:pageId/:orderId", authenticate(), (req, res)=>{
	OrderController.updateOrder({
		"_id" : req.params.orderId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, req.body, (error, updatedOrderDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Order list found successfully.", null);
		}
	});
});


/*=====  End of Router to update  ======*/



/*================================================
=            Router to delete order            =
================================================*/
router.delete("/delete/:pageId/:orderId", authenticate(), (req, res)=>{
	OrderController.deleteOrder({
		"_id" : req.params.orderId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, deletedOrderDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Order deleted successfully.", null);
		}
	});
});


/*=====  End of Router to delete order  ======*/


module.exports = router;