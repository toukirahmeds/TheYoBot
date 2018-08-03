const router = require("express").Router();

/*=========================================
=            Import of helpers            =
=========================================*/
const responseHelper = require("response-utilities");
const authenticate = require("../helpers/oauth2").authenticate;
/*=====  End of Import of helpers  ======*/

/*====================================================
=            Router to get a order info            =
====================================================*/
router.get("/details/:orderId", (req, res)=>{
	
});


/*=====  End of Router to get a order info  ======*/


/*==================================================
=            Router to get order list            =
==================================================*/
router.get("/list/:page",(req, res)=>{

});


/*=====  End of Router to get order list  ======*/


/*======================================================
=            Router to create a new order            =
======================================================*/
router.post("/create",(req, res)=>{

});


/*=====  End of Router to create a new order  ======*/


/*========================================
=            Router to update            =
========================================*/
router.post("/update/:orderId",(req, res)=>{

});


/*=====  End of Router to update  ======*/



/*================================================
=            Router to delete order            =
================================================*/
router.delete("/delete/:orderId", (req, res)=>{

});


/*=====  End of Router to delete order  ======*/


module.exports = router;