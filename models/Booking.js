const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
	"services" : {
		"type" : [mongoose.Schema.Types.ObjectId],
		"default" : []
	},	
	"serviceDate" : {
		"type" : Date
	},
	"bookingStatus" : {
		"type" : String,
		"enum" : ["booked","pending","completed"]
	},
	"fbMessageSubscriber" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "FbMessageSubscriber",
		"required" : true
	},
	"customer" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Customer",
		"required" : true
	},
	"page" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page",
		"required" : true
	}
},{
	"timestamps" : true
});


module.exports = mongoose.model("Booking", BookingSchema, "bookings");