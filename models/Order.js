const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
	"products" : {
		"type" : Array,
		"default" : []
	},	
	"orderedAt" : {
		"type" : Date
	},
	"orderStatus" : {
		"type" : String,
		"enum" : ["delivered","pending","processing","onWay"]
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
		}
	},
	"estimatedDeliveryTime" : {
		"type" : Date
	},
	"customer" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Customer"
	},
	"page" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page"
	}
},{
	"timestamps" : true
});


module.exports = mongoose.model("Order", OrderSchema, "orders");