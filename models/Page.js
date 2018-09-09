const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
	"name" : {
		"type" : String,
		"required" : true
	},
	"fbId" : {
		"type" : String,
		"required" : true,
		"unique" : true
	},
	"fbAccessToken" : {
		"type" : String,
		"required" : true
	},
	"fbAccessTokenExpiresAt" : {
		"type" : Date,
		"required" : true
	}, 
	"category" : {
		"type" : String,
		"required" : true
	},	
	"user" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "User",
		"required" : true
	},
	"status" : {
		"type" : Boolean
	},
	"customerMessages" : {
		"type" : Object,
		"default" : {}
	},
	"supportedLanguages" : {
		"type" : Array,
		"default" : ["english"]
	}
},{
	"timestamps" : true
});


module.exports = mongoose.model("Page", pageSchema);


