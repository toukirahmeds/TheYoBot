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

const fbGraphHelper = require('../helpers/fbGraphHelper');
/*=====  End of Import of helpers  ======*/

/*=========================================
=            Import of configs            =
=========================================*/
const config = require("../config/config.json");


/*=====  End of Import of configs  ======*/


/*========================================
=            Import of models            =
========================================*/
const User = require("../models/User");


/*=====  End of Import of models  ======*/


/*==========================================
=            Router to get user            =
==========================================*/
router.get("/details/:id", (req, res)=>{
	User.findById(req.params.id, (error, userDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "User data found.", userDoc);
		}
	});
});


/*=====  End of Router to get user  ======*/



/*===============================================
=            Router to get user list            =
===============================================*/
router.get("/list", (req, res)=>{
	let searchQuery = mongooseAssist.initSearchQuery(req.query);
	User.find(searchQuery.searchFields, searchQuery.queryFields).skip(searchQuery.from).limit(searchQuery.limit).exec((error, userList)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "User search successful.", userList);
		}
	});
});


/*=====  End of Router to get user list  ======*/


/*=============================================
=            Router to create user            =
=============================================*/
router.post("/create", (req, res)=>{
	fbGraphHelper.getLongLivedAccessToken(req.body.fbAccessToken, (error, llAccessToken)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			req.body.fbAccessToken = llAccessToken;
			let validation = mongooseAssist.initValidationSave(req.body, User);
			if(validation.errorFound){
				return responseHelper.errorResponse(res, null);
			}else{
				validation.newDocument.save((error, userDoc)=>{
					if(error){
						return responseHelper.errorResponse(res, null);
					}else{
						return responseHelper.successResponse(res, "User created successfully.", null);
					}
				});
			}
			
		}
	});
});


/*=====  End of Router to create user  ======*/



/*=============================================
=            Router to update user            =
=============================================*/
router.put("/update/:id", (req, res)=>{
	User.findByIdAndUpdate(req.params.id, req.body, (error, userDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "User data updated.", null);
		}
	});
});


/*=====  End of Router to update user  ======*/


/*=============================================
=            Router to delete user            =
=============================================*/
router.delete("/delete/:id", (req, res)=>{
	User.findByIdAndRemove(req.params.id, (error, userDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "User deleted successfully.", null);
		}
	});
});


/*=====  End of Router to delete user  ======*/

module.exports = router;