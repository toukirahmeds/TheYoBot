const mongoose = require("mongoose");


const automationSchema = new mongoose.Schema({
	"page" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "Page"
	},
	"type":{
		"type" : String,
		"default" : "messenger",
		"enum" : ["messenger","post"]
	},
	"trigger" : {
		"triggerType" : {
			"type" : String,
			"default" : "keyword",
			"enum" : ["keyword", "button", "comment"]
		},
		"triggerKeyword" : {
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
	}
},{
	"timestamps" : true
});


module.exports = mongoose.model("Automation", automationSchema);