const mongoose = require("mongoose");

const EnglishVocabularySchema = new mongoose.Schema({

},{
	"timestamps" : true
});


module.exports = mongoose.model("EnglishVocabulary", EnglishVocabularySchema);