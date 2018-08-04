const Service = require("../models/Service");
const mongooseAssist = require("mongoose-assist");

module.exports.getServiceInfo = (findQuery, callback)=>{
	Service.findOne(findQuery).exec(callback);
};


module.exports.getServiceList = (findQuery, callback)=>{
	Service.find(findQuery).exec(callback);
};

module.exports.createService = (serviceInfo, callback)=>{
	let validation = mongooseAssist.initValidationSave(serviceInfo, Service);

	if(validation.errorFound){
		callback("Errors", null);
	}else{
		validation.newDocument.save(callback);
	}
};


module.exports.updateService = (findQuery, updatedServiceInfo, callback)=>{
	Service.update(findQuery, updatedServiceInfo, callback);
};


module.exports.deleteService = (findQuery, callback)=>{
	Service.remove(findQuery, callback);
};