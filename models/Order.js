const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
	"page" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page"
	},
	"customer" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Customer"
	} 
},{
	"timestamps" : true
});


module.exports = mongoose.model("Order", OrderSchema);