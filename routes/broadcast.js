const router = require("express").Router();


/*=========================================
=            Import of helpers            =
=========================================*/
const responseHelper = require("response-utilities");
const authenticate = require("../helpers/oauth2").authenticate;
/*=====  End of Import of helpers  ======*/

/*============================================
=            Import of controller            =
============================================*/
const BroadcastController = require("../controllers/broadcast.controller");


/*=====  End of Import of controller  ======*/


/*===============================================
=            Router to get broadcast            =
===============================================*/
router.get("/:pageId/:broadcastId", authenticate(), ()=>{
	BroadcastController.getBroadcastInfo({
		"_id" : req.params.broadcastId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, broadcastDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Broadcast info found successfully.", broadcastDoc);
		}
	});
});


/*=====  End of Router to get broadcast  ======*/

/*=====================================================
=            Router to get broadcast list            =
=====================================================*/
router.get("/:pageId", authenticate(), ()=>{
	BroadcastController.getBroadcastList({
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, broadcastList)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Broadcast list found successfully.", broadcastList);
		}
	});
});


/*=====  End of Router to get broadcast list  ======*/

/*====================================================
=            Router to create a broadcast            =
====================================================*/
router.post("/create", authenticate(), ()=>{
	req.body.user = req.authentication.user._id;
	BroadcastController.createBroadcast(req.body, (error, broadcastDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Broadcast created successfully.", broadcastDoc);
		}
	});
});

/*=====  End of Router to create a broadcast  ======*/

/*====================================================
=            Router to update a broadcast            =
====================================================*/
router.put("/update/:pageId/:broadcastId", authenticate(), ()=>{
	BroadcastController.updateBroadcast({
		"_id" : req.params.broadcastId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, updatedBroadcastDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Broadcast updated successfully.", null);
		}
	});
});


/*=====  End of Router to update a broadcast  ======*/

/*====================================================
=            Router to delete a broadcast            =
====================================================*/
router.delete("/delete/:pageId/:broadcastId", authenticate(), ()=>{
	BroadcastController.deleteBroadcast({
		"_id" : req.params.broadcastId,
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	}, (error, deletedBroadcastDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Broadcast deleted successfully.", null);
		}
	});
});


/*=====  End of Router to delete a broadcast  ======*/


module.exports = router;