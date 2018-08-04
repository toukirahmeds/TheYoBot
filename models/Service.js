const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
	"page" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page"
	},
	"business" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "MyBusiness"
	},
	"user" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "User"
	},
	"name" : {
		"type" : String,
		"required" : true
	},
	"status" : {
		"type" : String,
		"enum" : ["available","notAvailable"]
	},
	"price" : {
		"currency":{
			"type" : String
		},
		"amount" : {
			"type" : Number
		}
	},
	"serviceTime" : {
		"startTime" : {
			"type" : String
		},
		"endTime" : {
			"type" : String
		}
	},
	"type" : {
		"type" : String,
		"required" : true
	}
},{
	"timestamps" : true
});

module.exports = mongoose.model("Service", ServiceSchema,"services");