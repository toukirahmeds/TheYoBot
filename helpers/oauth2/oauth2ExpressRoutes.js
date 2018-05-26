/*=============================================
=            Import of npm modules            =
=============================================*/
const router = require("express").Router();
const oauth2Server = require("oauth2-server");
const jwt = require("jsonwebtoken");

/*=====  End of Import of npm modules  ======*/


/*========================================
=            Import of oauth2            =
========================================*/
const oauth2 = require("./oauth2");

/*=====  End of Import of oauth2  ======*/

/*==================================================
=            Declaration of identifiers            =
==================================================*/
const Request = oauth2Server.Request;
const Response = oauth2Server.Response;



/*=====  End of Declaration of identifiers  ======*/


/*========================================
=            Router for login            =
========================================*/
router.post("/login", (req, res)=>{

});


/*=====  End of Router for login  ======*/


/*=========================================
=            Router for logout            =
=========================================*/
router.post("/logout", (req, res)=>{

});
/*=====  End of Router for logout  ======*/

/*===============================================
=            Router to refresh token            =
===============================================*/

router.post("/refresh_token", (req, res)=>{

});


/*=====  End of Router to refresh token  ======*/


/*===================================================
=            Router to get authorization            =
===================================================*/
router.get("/authorize", (req, res)=>{

});


/*=====  End of Router to get authorization  ======*/

/*===========================================
=            Router to authorize            =
===========================================*/
router.post("/authorize", (req, res)=>{
	
});


/*=====  End of Router to authorize  ======*/





module.exports = router;