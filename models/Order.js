const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
	"products" : {
		"type" : Array,
		"default" : []
	},	
	"orderedAt" : {
		"type" : Date,
		"default" : new Date,
		"required" : true
	},
	"orderStatus" : {
		"type" : String,
		"enum" : ["delivered","pending","processing","onWay"],
		"default" : "pending"
	},
	"deliveryAddress" : {
		"street" : {
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
		},
		"longitude" : {
			"type" : Number
		},
		"latitude" : {
			"type" : Number
		}
	},
	"estimatedDeliveryTime" : {
		"type" : Date
	},
	"customer" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Customer",
		"required" : true
	},
	"fbMessageSubscriber" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "FbMessageSubscriber",
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


module.exports = mongoose.model("Order", OrderSchema, "orders");