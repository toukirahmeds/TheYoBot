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
const InvoiceController = require("../controllers/invoice.controller");
/*=====  End of Import of controllers  ======*/



/*==================================================
=            Router to get invoice info            =
==================================================*/
router.get("/details/:pageId/:invoiceId", authenticate(), (req, res)=>{
	InvoiceController.getInvoiceInfo({
		"_id" : req.params.invoiceId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, invoiceDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Invoice info found successfully.", invoiceDoc);
		}
	});
});


/*=====  End of Router to get invoice info  ======*/



/*==================================================
=            Router to get invoice list            =
==================================================*/
router.get("/list/:pageId", authenticate(), (req, res)=>{
	InvoiceController.getInvoiceList({
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, invoiceList)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Invoice list found successfully.", invoiceList);
		}
	});
});


/*=====  End of Router to get invoice list  ======*/
/*================================================
=            Router to create invoice            =
================================================*/
router.post("/create", authenticate(), (req, res)=>{
	req.body.user = req.authentication.user._id;
	InvoiceController.createInvoice( req.body, (error, invoiceDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Invoice created successfully.", invoiceDoc);
		}
	});
});


/*=====  End of Router to create invoice  ======*/

/*================================================
=            Router to update invoice            =
================================================*/
router.put("/update/:pageId/:invoiceId",(req, res)=>{
	InvoiceController.updateInvoice({
		"_id" : req.params.invoiceId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, req.body, (error, updatedInvoiceDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Invoice updated successfully.", null);
		}
	});
});


/*=====  End of Router to update invoice  ======*/


/*================================================
=            Router to delete invoice            =
================================================*/
router.delete("/delete/:pageId/:invoiceId",(req, res)=>{
	InvoiceController.deleteInvoice({
		"_id" : req.params.invoiceId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, updatedInvoiceDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Invoice deleted successfully.", null);
		}
	});
});


/*=====  End of Router to delete invoice  ======*/



module.exports = router;