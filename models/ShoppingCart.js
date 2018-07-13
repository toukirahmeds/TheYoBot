const mongoose = require("mongoose");

const ShoppingCartSchema = new mongoose.Schema({
	"selectedProducts" : {
		"type" : Array
	},
	"page" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page",
		"required" : true
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
	}
},{
	"timestamps" : true
});

module.exports = mongoose.model("ShoppingCart", ShoppingCartSchema);