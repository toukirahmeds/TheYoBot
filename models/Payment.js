const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
	"user" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "User",
		"required" : true
	},
	"page" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page",
		"required" : true
	},
	"amount" : {
		"type" : Number
	},
	"currency" : {
		"type" : String
	},
	"customer" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Customer",
		"required" : true
	},
	"shoppingCart" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "ShoppingCart",
		"unique" : true,
		"required" : true
	},
	"invoice" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Invoice",
		"unique" : true,
		"required" : true
	},
	"fbMessageSubscriber" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "FbMessageSubscriber",
		"required" : true
	}
},{
	"timestamps" : true
});

module.exports = mongoose.model("Payment", PaymentSchema, "payments");