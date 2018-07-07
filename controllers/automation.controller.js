const mongooseAssist = require("mongoose-assist");
const Automation = require("../models/Automation");

module.exports.createAutomation = (automationInfo, callback)=>{
	let validation = mongooseAssist.initValidationSave(req.body, Automation);
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

// module.exports.getAutomation = 