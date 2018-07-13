const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	"page" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page"
	},
	"business" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "MyBusiness"
	}
},{
	"timestamps" : true
});

module.exports = mongoose.model("Product", ProductSchema);