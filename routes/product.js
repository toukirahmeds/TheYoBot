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
const ProductController = require("../controllers/product.controller");


/*=====  End of Import of controllers  ======*/


/*====================================================
=            Router to get a product info            =
====================================================*/
router.get("/details/:pageId/:productId", authenticate(), (req, res)=>{
	ProductController.getProductInfo({
		"_id" : req.params.productId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, productInfo)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Product info found successfully.", productInfo);
		}
	});
});


/*=====  End of Router to get a product info  ======*/


/*==================================================
=            Router to get product list            =
==================================================*/
router.get("/list/:pageId", authenticate(), (req, res)=>{
	console.log(req.query);
	ProductController.getProductList({
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, productList)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Product list found successfully.", productList);
		}
	});
});


/*=====  End of Router to get product list  ======*/


/*======================================================
=            Router to create a new product            =
======================================================*/
router.post("/create", authenticate(), (req, res)=>{
	console.log(req.body);
	req.body.user = req.authentication.user._id;
	ProductController.createProduct(req.body, (error, productDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Product created successfully.", productDoc);
		}
	});
});


/*=====  End of Router to create a new product  ======*/


/*========================================
=            Router to update            =
========================================*/
router.post("/update/:pageId/:productId", authenticate(), (req, res)=>{
	ProductController.updateProduct({
		"_id" : req.params.productId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, req.body, (error, updatedProductDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Product updated successfully.", null);
		}
	});
});


/*=====  End of Router to update  ======*/



/*================================================
=            Router to delete product            =
================================================*/
router.delete("/delete/:pageId/:productId", authenticate(), (req, res)=>{
	ProductController.deleteProduct({
		"_id" : req.params.productId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, deletedProductDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Product deleted successfully.", null);
		}
	});
});


/*=====  End of Router to delete product  ======*/


module.exports = router;
