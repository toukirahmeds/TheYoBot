const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Invoice", InvoiceSchema);