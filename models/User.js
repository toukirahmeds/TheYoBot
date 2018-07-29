const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	"fbId":{
		"type" : String,
		"unique" : true
	},
	"username" : {
		"type" : String,
		"unique" : true,
		"required" : true
	},
	"password" : {
		"type" : String,
		"required" : true
	},
	"email" : {
		"type" : String,
		"unique" : true,
		"required" : true
	},
	"name":{
		"type" : String,
		"required" : true
	},
	"fbAccessToken" : {
		"type" : String
	},
	"scope" : {
		"type" : String
	},
	"currentPage" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page"
	},
	"status" : {
		"type" : String,
		"required" : true,
		"default" : "activated",
		"enum" : ["activated", "deactivated"]
	}
},{
	"timestamps" : true
});



module.exports = mongoose.model("User", userSchema, "Users");