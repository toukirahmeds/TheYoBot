const mongoose = require("mongoose");


const Oauth2RefreshTokenSchema = new mongoose.Schema({
	"refreshToken" : {
		"type" : String,
		"required" : true
	},
	"expires" : {
		"type" : Date
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


module.exports = mongoose.model("Oauth2RefreshToken", Oauth2RefreshTokenSchema,"Oauth2RefreshTokens");