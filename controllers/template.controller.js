const Template = require("../models/Template");
const mongooseAssist = require("mongoose-assist");



module.exports.createTemplate = (templateInfo, callback)=>{
	let validation = mongooseAssist.initValidationSave(templateInfo, Template);

	if(validation.errorFound){
		callback("Errors", null);
	}else{
		validation.newDocument.save(callback);
	}
}

module.exports.createManyTemplates = (templateList, callback)=>{
	Template.create(templateList, callback);
};