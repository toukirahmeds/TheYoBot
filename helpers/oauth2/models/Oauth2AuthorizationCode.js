const mongoose = require("mongoose");



const Oauth2AuthorizationCodeSchema = new mongoose.Schema({
	"authorizationCode" : {
		"type" : String,
		"required" : true
	},
	"expires" : {
		"type" : Date
 	},
	"redirectUri" : {
		"type" : String
	},
	"scope" : {
		"type" : String
	},
	"user" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "User"
	},
	"oauth2Client" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Oauth2Client"
	}
},{
	"timestamps" : true
});


module.exports = mongoose.model("Oauth2AuthorizationCode", Oauth2AuthorizationCodeSchema, "Oauth2AuthorizationCodes");