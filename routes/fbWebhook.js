/*=============================================
=            Import of npm modules            =
=============================================*/
const router = require("express").Router();


/*=====  End of Import of npm modules  ======*/


/*=========================================
=            Import of helpers            =
=========================================*/
const responseHelper = require("response-utilities");
const mongooseAssist = require("mongoose-assist");
const fbMessageHelper = require("../helpers/fbMessageHelper");
const fbBotHelper = require("../helpers/fbBotHelper");
/*=====  End of Import of helpers  ======*/

/*=============================================
=            Import of config                 =
=============================================*/
const config = require('../config/config.json');


/*=====  End of Import of config       ======*/



/*==============================================
=            Router for get request            =
==============================================*/
router.get("/", (req, res)=>{
	console.log(req.query);
	res.send(req.query['hub.challenge']);
	// responseHelper.successResponse(res, "Successfully received by webhook", null);
});


/*=====  End of Router for get request  ======*/


/*===============================================
=            Router for post request            =
===============================================*/
router.post("/", (req, res)=>{
	// console.log(req.body);
	if(req.body.object === 'page'){
		if(req.body.entry && req.body.entry[0] && req.body.entry[0].messaging){
			let senderId = req.body.entry[0].messaging[0].sender.id;
			let recipientId = req.body.entry[0].messaging[0].recipient.id;
			if(req.body.entry[0].messaging){
				if(req.body.entry[0].messaging[0].message){
					let message = req.body.entry[0].messaging[0].message;
					res.status(200).send({
						"recipient_id" : senderId,
						"message_id" : message.mid
					});
					fbBotHelper.sendPageReply(recipientId, senderId, message, (result)=>{
						console.log(result);
					});
					
				}else if(req.body.entry[0].messaging[0].delivery){
					res.status(200).send({
							"recipient_id" : senderId,
							"message_id" : req.body.entry[0].messaging[0].delivery.mid
					});
				}else if(req.body.entry[0].messaging[0].read){
					res.status(200).send({
							"recipient_id" : senderId,
							"message_id" : req.body.entry[0].messaging[0].read.mid
					});
				}
				// console.log(req.body.entry[0].messaging[0]);
			}else{
				res.status(200).send("GOT REQUEST");
			}
		}else{
			res.status(200).send("GOT REQUEST");
		}
	}else if(req.body.object === 'user'){
		res.status(200).send();
	}else if(req.body.object === 'permissions'){
		res.status(200).send();
	}else if(req.body.object === 'application'){
		res.status(200).send();
	}else if(req.body.object === 'certificate_transparency'){
		res.status(200).send();
	}else{
		res.status(200).send();
	}
});


/*=====  End of Router for post request  ======*/

/*==============================================
=            Router for put request            =
==============================================*/
router.put("/", (req, res)=>{
	
});


/*=====  End of Router for put request  ======*/




module.exports = router;


