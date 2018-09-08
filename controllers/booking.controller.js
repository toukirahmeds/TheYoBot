const Booking = require("../models/Booking");
const mongooseAssist = require("mongoose-assist");

module.exports.getBookingInfo = (findQuery, callback)=>{
	Booking.find(findQuery, callback);
};

module.exports.getBookingList = (findQuery, callback)=>{
	Booking.find(findQuery, callback);
};


module.exports.createBooking = (BookingInfo, callback)=>{
	let validation = mongooseAssist.initValidationSave(BookingInfo, Booking);
	if(validation.errorFound){
		callback("ERRORS", null);
	}else{
		validation.newDocument.save(callback);
	}
};


module.exports.updateBooking = (findQuery, updatedBookingInfo, callback)=>{
	Booking.update(findQuery, updatedBookingInfo, callback);
};


module.exports.deleteBooking = (findQuery, callback)=>{
	Booking.remove(findQuery, callback);
};