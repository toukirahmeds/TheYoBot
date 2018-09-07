const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	"page" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page",
		"required" : true
	},
	"business" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "MyBusiness"
	},
	"price" : {
		"currency" : {
			"type" : String
		},
		"amount" : {
			"type" : Number
		}
	},
	"quantityAvailable" : {
		"type" : Number,
		"required" : true
	},
	"name" : {
		"type" : String,
		"required" : true
	},
	"model" : {
		"type" : String
	},
	"type" : {
		"type" : String,
		"required" : true
	},
	"soldQuantity" : {
		"type" : Number,
		"default" : 0
	},
	"user" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "User",
		"required" : true
	}
},{
	"timestamps" : true
});

module.exports = mongoose.model("Product", ProductSchema, "products");