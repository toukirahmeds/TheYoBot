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
	}
},{
	"timestamps" : true
});


module.exports = mongoose.model("Page", pageSchema);

