const mongoose = require("mongoose");



const MyBusinessSchema = new mongoose.Schema({
	"name" :{
		"type" : String,
		"required" : true
	},
	"contactInfo" : {
		"primaryPhone" : {
			"type" : String
		},
		"primaryEmail" : {
			"type" : String
		},
		"primaryAddress" : {
			"street": {
				"type" : String
			},
			"postalCode" : {
				"type" : String
			},
			"city" : {
				"type" : String
			},
			"state" : {
				"type" : String
			},
			"country" : {
				"type" : String
			}
		}
	},
	"category":{
		"type" : String,
		"required" : true
	},
	"businessLocations" : {
		"type" : Array
	},
	"paymentMethods" : {
		"type" : Array
	},
	"page" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page",
		"required" : true
	},
	"user" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "User",
		"required" : true
	}
},{
	"timestamps" : true
});


module.exports = mongoose.model("MyBusiness",MyBusinessSchema,"myBusinesses");