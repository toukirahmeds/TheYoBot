const mongoose = require("mongoose");


const Oauth2ClientSchema = new mongoose.Schema({
	"name" : {
		"type" : String,
		"required" : true
	},
	"clientId" : {
		"type" : String,
		"required" : true
	},
	"clientSecret" : {
		"type" : String,
		"required" : true
	},
	"redirectUris" : {
		"type" : Array
	},
	"grantTypes" : {
		"type" : Array
	},
	"scope" : {
		"type" : String
	},
	"user" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "User"
	}
},{
	"timestamps" : true
});


module.exports = mongoose.model("Oauth2Client", Oauth2ClientSchema,"Oauth2Clients");