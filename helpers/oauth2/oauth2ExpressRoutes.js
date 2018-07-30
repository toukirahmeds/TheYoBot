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
const Oauth2AccessToken = require("./models/Oauth2AccessToken");
const Oauth2RefreshToken = require("./models/Oauth2RefreshToken");
/*=====  End of Import of models  ======*/


/*========================================
=            Import of config            =
========================================*/
const config = require("../../config/config.json");


/*=====  End of Import of config  ======*/



/*========================================
=            Router for login            =
========================================*/
router.post("/authenticate", (req, res)=>{
	let request = new Request(req);
	let response = new Response(res);
	oauth2.token(request, response).then((token)=>{
		res.status(200).json({
			"accessToken" : token.accessToken,
			"accessTokenExpiresAt" : token.accessTokenExpiresAt,
			"refreshToken" : token.refreshToken,
			"refreshTokenExpiresAt" : token.refreshTokenExpiresAt,
			"user" : {
				"username" : token.user.username,
				"email" : token.user.email,
				"fbAccessToken" : token.user.fbAccessToken,
				"currentPage" : token.user.currentPage
			},
			"scope" : token.scope
		});
	}).catch((error)=>{
		// console.log(error);
		res.status(404).json({
			"message" : "Unauthorized"
		});
	});
});


/*=====  End of Router for login  ======*/


/*=========================================
=            Router for logout            =
=========================================*/
router.post("/logout", (req, res)=>{
	let token;
	let tokenSecret;
	if(req.body.accessToken){
		token = req.body.accessToken;
		tokenSecret = config.jwt.accessTokenSecret;
	}else{
		token = req.body.accessToken;
		tokenSecret = config.jwt.refreshTokenSecret;
	}
	jwt.verify(token, tokenSecret, (error, decoded)=>{
		if(error){
			return res.status(200).json({
				"status" : true,
				"message" : "successfully removed tokens"
			});
		}else{
			const accessTokenRemovedPromise = new Promise((resolve, reject)=>{
				Oauth2AccessToken.remove({
					"user" : decoded.user._id
				}).exec((error, removedAccessTokens)=>{
					resolve(true);
				});
			});

			const refreshTokenRemovedPromise = new Promise((resolve, reject)=>{
				Oauth2RefreshToken.remove({
					"user" : decoded.user._id
				}).exec((error, removedRefreshTokens)=>{
					resolve(true);
				});
			});

			Promise.all([accessTokenRemovedPromise, refreshTokenRemovedPromise]).then((result)=>{
				return res.status(200).json({
					"status" : true,
					"message" : "successfully removed tokens"
				});
			});
		}
	});
});
/*=====  End of Router for logout  ======*/



/*===================================================
=            Router to get authorization            =
===================================================*/
router.get("/authorize", (req, res)=>{
	console.log(req.query);
	Oauth2Client.findOne({
		"clientId" : req.query.clientId,
		"clientSecret" : req.query.clientSecret
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
	// console.log(req.body);
	const request = new Request(req);
	const response = new Response(res);
	console.log("Authorize post");
	const options = {
		"handle" : (request, response)=>{
			console.log("THIS IS THE HANDLER");
			return true;
		}
	};
	oauth2.authorize(request, response, options).then((error, authorizeDoc)=>{
		res.status(200).json(authorizeDoc);
	}).catch((error)=>{
		res.status(error.code || 500).json(error);
	});
});


/*=====  End of Router to authorize  ======*/





module.exports = router;