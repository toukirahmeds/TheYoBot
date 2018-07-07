const mongoose = require("mongoose");


const automationSchema = new mongoose.Schema({
	"page" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page"
	},
	"type":{
		"type" : String,
		"default" : "fbMessenger",
		"enum" : ["fbMessenger","fbPost"]
	},
	"trigger" : {
		"triggerType" : {
			"type" : String,
			"default" : "keyword",
			"enum" : ["keyword", "button", "comment"]
		},
		"triggerKeywords" : {
			"type" : Array,
			"default" : []
		}
	},
	"template" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Template"
	},
	"position" : {
		"type" : Number,
		"default" : 0
	},
	"previousPosition" : {
		"type" : Number,
		"default" : 0
	},
	"previousAutomation" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Automation"
	},
	"user" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "User"
	}
},{
	"timestamps" : true
});


module.exports = mongoose.model("Automation", automationSchema);