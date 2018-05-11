const mongoose = require('mongoose');

const fbMessageSubscriberSchema = new mongoose.Schema({
	"psid" : {
		"type" : String,
		"required" : true,
		"unique" : true
	},
	"firstName" : {
		"type" : String,
		"required" : true
	},
	"lastName" : {
		"type" : String,
		"required" : true
	},
	"profilePic" : {
		"type" : String
	},
	"locale" : {
		"type" : String
	},
	"timezone" : {
		"type" : String
	},
	"gender" : {
		"type" : String
	},
	"isPaymentEnabled" : {
		"type" : Boolean
	},
	"lastAdReferral" : {
		"type" : Object
	},
	"currentMessengerAutomation" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Automation"
	},
	"page" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page"
	}
});


module.exports = mongoose.model("FbMessageSubscriber", fbMessageSubscriberSchema);