const router = require("express").Router();

/*=========================================
=            Import of helpers            =
=========================================*/
const responseHelper = require("response-utilities");
const authenticate = require("../helpers/oauth2").authenticate;
/*=====  End of Import of helpers  ======*/

/*====================================================
=            Router to get a service info            =
====================================================*/
router.get("/details/:serviceId", (req, res)=>{
	
});


/*=====  End of Router to get a service info  ======*/


/*==================================================
=            Router to get service list            =
==================================================*/
router.get("/list/:page",(req, res)=>{

});


/*=====  End of Router to get service list  ======*/


/*======================================================
=            Router to create a new service            =
======================================================*/
router.post("/create",(req, res)=>{

});


/*=====  End of Router to create a new service  ======*/


/*========================================
=            Router to update            =
========================================*/
router.post("/update/:serviceId",(req, res)=>{

});


/*=====  End of Router to update  ======*/



/*================================================
=            Router to delete service            =
================================================*/
router.delete("/delete/:serviceId", (req, res)=>{

});


/*=====  End of Router to delete service  ======*/


module.exports = router;
