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
const CustomerController = require("../controllers/customer.controller");
/*=====  End of Import of controllers  ======*/



/*==================================================
=            Router to get Customer info            =
==================================================*/
router.get("/details/:pageId/:customerId", authenticate(), (req, res)=>{
	CustomerController.getCustomerInfo({
		"_id" : req.params.customerId,
		"page" : req.params.pageId
	}, (error, CustomerDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Customer info found successfully.", CustomerDoc);
		}
	});
});


/*=====  End of Router to get Customer info  ======*/



/*==================================================
=            Router to get Customer list            =
==================================================*/
router.get("/list/:pageId", authenticate(), (req, res)=>{
	CustomerController.getCustomerList({
		"page" : req.params.pageId
	}, (error, CustomerList)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Customer list found successfully.", CustomerList);
		}
	});
});


/*=====  End of Router to get Customer list  ======*/
/*================================================
=            Router to create Customer            =
================================================*/
router.post("/create", authenticate(), (req, res)=>{
	req.body.user = req.authentication.user._id;
	CustomerController.createCustomer( req.body, (error, CustomerDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Customer created successfully.", CustomerDoc);
		}
	});
});


/*=====  End of Router to create Customer  ======*/

/*================================================
=            Router to update Customer            =
================================================*/
router.put("/update/:pageId/:customerId",(req, res)=>{
	CustomerController.updateCustomer({
		"_id" : req.params.customerId,
		"page" : req.params.pageId
	}, req.body, (error, updatedCustomerDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Customer updated successfully.", null);
		}
	});
});


/*=====  End of Router to update Customer  ======*/


/*================================================
=            Router to delete Customer            =
================================================*/
router.delete("/delete/:pageId/:customerId",(req, res)=>{
	CustomerController.deleteCustomer({
		"_id" : req.params.customerId,
		"page" : req.params.pageId
	}, (error, updatedCustomerDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Customer deleted successfully.", null);
		}
	});
});


/*=====  End of Router to delete Customer  ======*/



module.exports = router;