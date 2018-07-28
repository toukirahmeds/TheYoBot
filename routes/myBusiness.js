/*========================================
=            Import of routes            =
========================================*/
const router = require("express").Router();


/*=====  End of Import of routes  ======*/

/*=========================================
=            Import of helpers            =
=========================================*/
const responseHelper = require("response-utilities");
const authenticate = require("../helpers/oauth2").authenticate;
/*=====  End of Import of helpers  ======*/

/*=============================================
=            Import of controllers            =
=============================================*/
const MyBusinessController = require("../controllers/business.controller");


/*=====  End of Import of controllers  ======*/



/*=====================================================
=            Route to get my business info            =
=====================================================*/
router.get("/details/:pageId", authenticate(), (req, res)=>{
	MyBusinessController.findMyBusiness({
		"page" : req.params.pageId,
		"user" : req.authentication.user._id
	},(error, businessDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Business info found successfully.", businessDoc);
		}
	});
});


/*=====  End of Route to get my business info  ======*/


/*=========================================================
=            Router to create my business info            =
=========================================================*/
router.post("/create", authenticate(), (req, res)=>{
	req.body.user = req.authentication.user._id;
	MyBusinessController.createMyBusiness(req.body, (error, businessDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Business created successfully.", businessDoc);
		}
	});
});


/*=====  End of Router to create my business info  ======*/

/*=========================================================
=            Router to update my business info            =
=========================================================*/
router.put("/update/:myBusinessId", authenticate(), (req, res)=>{
	MyBusinessController.updateMyBusiness({
		"_id" : req.params.myBusinessId,
		"user" : req.authentication.user._id
	}, req.body, (error, businessDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Business info updated successfully.", null);
		}
	});
});
/*=====  End of Router to update my business info  ======*/


/*=========================================================
=            Router to delete my business info            =
=========================================================*/
router.delete("/delete/:myBusinessId", authenticate(), (req, res)=>{
	MyBusinessController.deleteMyBusiness({
		"_id" : req.params.myBusinessId,
		"user" : req.authentication.user._id
	}, (error, businessDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Business info deleted successfully.", null);
		}
	});
});
/*=====  End of Router to delete my business info  ======*/




module.exports = router;
