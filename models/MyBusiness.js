const mongoose = require("mongoose");



const MyBusinessSchema = new mongoose.Schema({
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
		"type" : String
	},
	"businessLocations" : {
		"type" : Array
	},
	"paymentMethods" : {
		"type" : Array
	},
	"fbPage" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page"
	}
},{
	"timestamps" : true
});


module.exports = mongoose.model("MyBusiness",);