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
	"salutation" : {
		"type" : String,
		"enum" : ["Mr","Ms"]
	},
	"honorific" : {
		"type" : String,
		"enum" : ["Sir","Madam"]
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
	"infoQuery" : {
		"type" : String
	},
	"page" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page",
		"required" : true
	},
	"visitedSoFar" : {
		"type" : Number,
		"default" : 0
	},
	"language":{
		"primary" : {
			"type" : String
		},
		"secondary" :{
			"type" : String
		},
		"currentLanguage" : {
			"type" : String
		}
	},
	"mistakesCount" : {
		"type" : Number,
		"default" : 0
	},
	"badRecordsCount":{
		"type" : Number,
		"default" : 0
	},
	"blocked" : {
		"type" : Boolean,
		"default" : false
	}, 
	"customer" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Customer"
	}
},{
	"timestamps" : true
});


module.exports = mongoose.model("FbMessageSubscriber", fbMessageSubscriberSchema);