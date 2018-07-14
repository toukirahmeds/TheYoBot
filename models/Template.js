const mongoose = require("mongoose");


const templateSchema = new mongoose.Schema({
	"page" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page"
	},
	"type" : {
		"type" : String,
		"default" : "fbMessenger",
		"enum" : ["fbMessenger","fbPost","fbMessengerDefault","fbPostDefault"]
	},
	"templateType" : {
		"type" : String,
		"default" : "generic",
		"enum" : ["generic","list","media","open_graph","receipt", "airline_boardingpass",
				  "airline_checkin","airline_itinerary", "airline_update"]
	},
	"title" : {
		"type" : String,
		"required" : true
	},
	"message" : {
		"type" : String
	},
	"attachment" : {
		"type" : Object
	},
	"quickReplies" : {
		"type" : [{
			"contentType" : {
				"type" : String
			},
			"title" : {
				"type" : String
			},
			"payload" : {
				"type" : String
			},
			"imageUrl" : {
				"type" : String
			}
		}]
	},
	"user" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "User"
	}
},{
	"timestamps" : true
});


module.exports = mongoose.model("Template", templateSchema);