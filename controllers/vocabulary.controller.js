const Vocabulary = require("../models/Vocabulary");
const mongooseAssist = require("mongoose-assist");

module.exports.createVocabulary = (vocabularyInfo, callback)=>{
	let validation = mongooseAssist.initValidationSave(vocabularyInfo, Vocabulary);

	if(validation.errorFound){
		callback("Errors", null);
	}else{
		validation.newDocument.save(callback);
	}
};


module.exports.createManyVocabularies = (vocabularyList, callback)=>{
	Vocabulary.create(vocabularyList, callback);
};