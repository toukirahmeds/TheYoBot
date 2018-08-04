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
const PaymentController = require("../controllers/payment.controller");
/*=====  End of Import of controllers  ======*/



/*====================================================
=            Router to get a payment info            =
====================================================*/
router.get("/details/:pageId/:paymentId", authenticate(), (req, res)=>{
	PaymentController.getPaymentInfo({
		"_id" : req.params.paymentId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, paymentInfo)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Payment info found successfully.", paymentInfo);
		}
	});
});


/*=====  End of Router to get a payment info  ======*/

/*==================================================
=            Router to get payment list            =
==================================================*/
router.get("/list/:pageId", authenticate(), (req, res)=>{
	PaymentController.getPaymentList({
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, paymentList)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Payment list found successfully.", paymentList);
		}
	});
});


/*=====  End of Router to get payment list  ======*/

/*==================================================
=            Router to create a payment            =
==================================================*/

router.post("/create", authenticate(), (req, res)=>{
	req.body.user = req.authentication.user._id;
	PaymentController.createPayment({
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, paymentInfo)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Payment created successfully.", paymentInfo);
		}
	});
});

/*=====  End of Router to create a payment  ======*/

/*==================================================
=            Router to update a payment            =
==================================================*/
router.put("/update/:pageId/:paymentId", authenticate(), (req, res)=>{
	PaymentController.updatePayment({
		"_id" : req.params.paymentId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, updatedPaymentDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Payment updated successfully.", null);
		}
	});
});


/*=====  End of Router to update a payment  ======*/


/*==================================================
=            Router to delete a payment            =
==================================================*/
router.delete("/delete/:pageId/:paymentId", authenticate(), (req, res)=>{
	PaymentController.deletePayment({
		"_id" : req.params.paymentId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, deletedPaymentDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Payment deleted successfully.", null);
		}
	});
});


/*=====  End of Router to delete a payment  ======*/


module.exports = router;