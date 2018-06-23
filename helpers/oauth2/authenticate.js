/*=============================================
=            Import of npm modules            =
=============================================*/
const oauth2Server = require("oauth2-server");
const jwt = require("jsonwebtoken");
/*=====  End of Import of npm modules  ======*/

/*==================================================
=            Declaration of Identifiers            =
==================================================*/
const Request = oauth2Server.Request;
const Response = oauth2Server.Response;


/*=====  End of Declaration of Identifiers  ======*/

/*========================================
=            Import of oauth2            =
========================================*/
const oauth2 = require("./oauth2");


/*=====  End of Import of oauth2  ======*/



/*========================================
=            Import of config            =
========================================*/
const config = require("../../config/config.json");
/*=====  End of Import of config  ======*/

module.exports = (httpOptions)=>{
	let options = httpOptions || {};
	return (req, res, next)=>{
		const request = new Request({
			"headers" : {
				"authorization" : req.headers.authorization
			},
			"method" : req.method,
			"query" : req.query,
			"body" : req.body
		});

		const response = new Response(res);
		oauth2.authenticate(request, response, options).then((token)=>{
			req.authentication = token;
			next();
		}).catch((error)=>{
			return res.status(401).json({
				"status" : 401,
				"message" : "Unauthorized"
			});
		});
	};
};
