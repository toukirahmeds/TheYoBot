const Template = require("../models/Template");
const mongooseAssist = require("mongoose-assist");



module.exports.createTemplate = (templateInfo, callback)=>{
	let validation = mongooseAssist.initValidationSave(req.body, Template);

	if(validation.errorFound){
		callback("Errors", null);
	}else{
		validation.newDocument.save((error, templateDoc)=>{
			if(error){
				callback(error, null);
			}else{
				callback(null, templateDoc);
			}
		});
	}
}