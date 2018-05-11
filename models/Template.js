const mongoose = require("mongoose");


const templateSchema = new mongoose.Schema({
	"page" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page"
	},
	"type" : {
		"type" : String,
		"default" : "messenger",
		"enum" : ["messenger","post"]
	},
	"templateType" : {
		"type" : String,
		"default" : "generic",
		"enum" : ["generic","list","media","open_graph","receipt", "airline_boardingpass",
				  "airline_checkin","airline_itinerary", "airline_update"]
	},
	"title" : {
		"type" : String,
		"required" : true
	},
	"message" : {
		"type" : String
	},
	"attachment" : {
		"type" : Object
	}
	// "messageWithButtons" : {
	// 	"type" : String
	// },
	// "youtubeUrl" : {
	// 	"type" : String
	// },
	// "imageUrl" : {
	// 	"type" : String
	// },
	// "buttons" : [{
	// 	"title" : {
	// 		"type" : String
	// 	},
	// 	"type" : {
	// 		"type" : String,
	// 		"default":"sendMessage",
	// 		"enum" : ["sendMessage","sendToUrl"]
	// 	},
	// 	"buttonType" : {
	// 		"type" : String,
	// 		"default" : "postback",
	// 		"enum" : ["payment", "phone_number", "game_play", "account_link", "account_unlink",
	// 				  "postback", "element_share", "web_url"]
	// 	},
	// 	"buttonActions" : {
	// 		"type" : Object,
	// 		"default" : {}
	// 	}				
	// }]
},{
	"timestamps" : true
});


module.exports = mongoose.model("Template", templateSchema);