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
=            Import of models            =
========================================*/
const Oauth2Client = require("./models/Oauth2Client");


/*=====  End of Import of models  ======*/



/*========================================
=            Router for login            =
========================================*/
router.post("/authenticate", (req, res)=>{

});


/*=====  End of Router for login  ======*/


/*=========================================
=            Router for logout            =
=========================================*/
router.post("/logout", (req, res)=>{

});
/*=====  End of Router for logout  ======*/



/*===================================================
=            Router to get authorization            =
===================================================*/
router.get("/authorize", (req, res)=>{
	console.log(req.body);
	Oauth2Client.findOne({
		"clientId" : req.body.clientId,
		"clientSecret" : req.body.clientSecret
	},{
		"_id" : true,
		"name" : true
	}).exec((error, authorizeDoc)=>{
		if(error){
			res.status(401).json({
				"message" : "Unauthorized"
			});
		}else if(authorizeDoc){
			res.status(200).json(authorizeDoc);
		}else{
			res.status(404).json({
				"message" : "Invalid Client"
			});
		}
	});
});


/*=====  End of Router to get authorization  ======*/

/*===========================================
=            Router to authorize            =
===========================================*/
router.post("/authorize", (req, res)=>{
	console.log(req.body);
	const request = new Request(req);
	const response = new Response(res);
	oauth2.authorize(request, response, (error, authorizeDoc)=>{
		if(error){
			console.log("ERROR FOUND");
			// res.status(error.code || 500).json(error);
		}else{
			console.log("NO error");
			// res.status(200).json(authorizeDoc);
		}
	});
});


/*=====  End of Router to authorize  ======*/





module.exports = router;