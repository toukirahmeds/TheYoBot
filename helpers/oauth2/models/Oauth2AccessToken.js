const mongoose = require("mongoose");


const oauth2AccessTokenSchema = new mongoose.Schema({
	"accessToken" : {
		"type" : String,
		"required" : true
	},
	"expires" : {
		"type" : Date,
		"required" : true
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


module.exports = mongoose.model("Oauth2AccessToken", oauth2AccessTokenSchema);