const mongooseAssist = require("mongoose-assist");
const Automation = require("../models/Automation");

module.exports.createAutomation = (automationInfo, callback)=>{
	let validation = mongooseAssist.initValidationSave(automationInfo, Automation);
	if(validation.errorFound){
		callback("ERRORS", null);
	}else{
		validation.newDocument.save((error, automationDoc)=>{
			if(error){
				callback(error, null);
			}else{
				callback(null, automationDoc);
			}
		});
	}
};


module.exports.createManyAutomations = (automationList, callback)=>{
	Automation.create(automationList, callback);
};

module.exports.getAutomationsWithTemplate = (query, callback)=>{
	Automation.find(query).populate({
		"path" : "template",
		"model" : "Template"
	}).sort({"position" : 1}).exec(callback);
};

