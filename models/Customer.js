const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
	"platform":{
		"type" : String,
		"enum" : ["facebook","instagram","youtube"]
	},
	"contactInfo" : {
		"email" : {
			"type" : String
		},
		"phone" : {
			"type" : String
		},
		"address" : {
			"street" : {
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
	"maritalInfo" : {
		"status" : {
			"type" : String,
			"enum" : ["married","single"]
		},
		"dateOfMarriage" : {
			"type" : Date
		}
		
	},
	"dateOfBirth" : {
		"type" : Date
	},
	"spouseInfo" : {
		"dateOfBirth" : {
			"type" : Date
		},
		"fullName" : {
			"type" : String
		}
	},
	"childrensInfo" : {
		"type" : Array
	}
	"boughtTimes" : {
		"type" : Number,
		"default" : 0
	},
	"totalPurchasedAmount" : {
		"type" : Number,
		"default" : 0
	},
	"purchaseCurrency" : {
		"type" : String
	},
	"lastPurchased" : {
		"type" : Date
	},
	"currentDiscountPackage" : {
		"type" : String
	},
	"fbMessageSubscriber" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "FbMessageSubscriber"
	}
},{
	"timestamps" : true
});


module.exports = mongoose.model("Customer", CustomerSchema);
