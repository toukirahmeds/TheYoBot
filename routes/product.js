const router = require("express").Router();

/*=========================================
=            Import of helpers            =
=========================================*/
const responseHelper = require("response-utilities");
const authenticate = require("../helpers/oauth2").authenticate;
/*=====  End of Import of helpers  ======*/

/*====================================================
=            Router to get a product info            =
====================================================*/
router.get("/details/:productId", (req, res)=>{
	
});


/*=====  End of Router to get a product info  ======*/


/*==================================================
=            Router to get product list            =
==================================================*/
router.get("/list/:page",(req, res)=>{

});


/*=====  End of Router to get product list  ======*/


/*======================================================
=            Router to create a new product            =
======================================================*/
router.post("/create",(req, res)=>{

});


/*=====  End of Router to create a new product  ======*/


/*========================================
=            Router to update            =
========================================*/
router.post("/update/:productId",(req, res)=>{

});


/*=====  End of Router to update  ======*/



/*================================================
=            Router to delete product            =
================================================*/
router.delete("/delete/:productId", (req, res)=>{

});


/*=====  End of Router to delete product  ======*/


module.exports = router;
