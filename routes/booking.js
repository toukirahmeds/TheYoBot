const router = require("express").Router();

/*=========================================
=            Import of helpers            =
=========================================*/
const responseHelper = require("response-utilities");
const authenticate = require("../helpers/oauth2").authenticate;
/*=====  End of Import of helpers  ======*/

/*=============================================
=            Import of controllers            =
=============================================*/
const BookingController = require("../controllers/booking.controller");


/*=====  End of Import of controllers  ======*/


/*====================================================
=            Router to get a Booking info            =
====================================================*/
router.get("/details/:pageId/:bookingId", authenticate(), (req, res)=>{
	BookingController.getBookingInfo({
		"_id" : req.params.bookingId,
		"page" : req.params.pageId
	}, (error, BookingInfo)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Booking info found successfully.", BookingInfo);
		}
	});
});


/*=====  End of Router to get a Booking info  ======*/


/*==================================================
=            Router to get Booking list            =
==================================================*/
router.get("/list/:pageId", authenticate(), (req, res)=>{
	BookingController.getBookingList({
		"page" : req.params.pageId
	}, (error, bookingList)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Booking list found successfully.", bookingList);
		}
	});
});


/*=====  End of Router to get Booking list  ======*/


/*======================================================
=            Router to create a new Booking            =
======================================================*/
router.post("/create", authenticate(), (req, res)=>{
	req.body.user = req.authentication.user._id;
	BookingController.createBooking( req.body, (error, bookingDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Booking created successfully.", bookingDoc);
		}
	});
});
/*=====  End of Router to create a new Booking  ======*/


/*========================================
=            Router to update            =
========================================*/
router.post("/update/:pageId/:bookingId", authenticate(), (req, res)=>{
	BookingController.updateBooking({
		"_id" : req.params.bookingId,
		"page" : req.params.pageId
	}, req.body, (error, updatedBookingDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Booking list found successfully.", null);
		}
	});
});


/*=====  End of Router to update  ======*/



/*================================================
=            Router to delete Booking            =
================================================*/
router.delete("/delete/:pageId/:bookingId", authenticate(), (req, res)=>{
	BookingController.deleteBooking({
		"_id" : req.params.bookingId,
		"page" : req.params.pageId
	}, (error, deletedBookingDoc)=>{
		if(error){
			return responseHelper.errorResponse(res, null);
		}else{
			return responseHelper.successResponse(res, "Booking deleted successfully.", null);
		}
	});
});


/*=====  End of Router to delete Booking  ======*/


module.exports = router;