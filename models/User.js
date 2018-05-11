const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	"fbId":{
		"type" : String,
		"required" : true,
		"unique" : true
	},
	"name":{
		"type" : String,
		"required" : true
	},
	"fbAccessToken" : {
		"type" : String,
		"required" : true
	}
},{
	"timestamps" : true
});



module.exports = mongoose.model("User", userSchema);