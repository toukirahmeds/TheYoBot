const mongoose = require("mongoose");

const VocabularySchema = new mongoose.Schema({
	"name" : {
		"type" : String,
		"required" : true,
		"unique" : true
	},
	"locale" : {
		"type" : String,
		"default" : "en"
	},
	"english" : {
		"type" : Array,
		"default" : [],
		"required" : true
	},
	"bengali" : {
		"type" : Array,
		"default" : []
	},
	"spanish" : {
		"type" : Array,
		"default" : []
	},
	"deutsch" : {
		"type" : Array,
		"default" : []
	},
	"hindi" : {
		"type" : Array,
		"default" : []
	},
	"japanese" : {
		"type" : Array,
		"default" : []
	},
	"french" : {
		"type" : Array,
		"default" : []
	},
	"arabic" : {
		"type" : Array,
		"default" : []
	},
	"chinese" : {
		"type" : Array,
		"default" : []
	},
	"russian" : {
		"type" : Array,
		"default" : []
	}
},{
	"timestamps" : true
});


module.exports = mongoose.model("Vocabulary", VocabularySchema);