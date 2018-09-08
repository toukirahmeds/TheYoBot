const Customer = require("../models/Customer");
const mongooseAssist = require("mongoose-assist");

module.exports.getCustomerInfo = (findQuery, callback)=>{
	Customer.find(findQuery, callback);
};

module.exports.getCustomerList = (findQuery, callback)=>{
	Customer.find(findQuery, callback);
};


module.exports.createCustomer = (CustomerInfo, callback)=>{
	let validation = mongooseAssist.initValidationSave(CustomerInfo, Customer);
	if(validation.errorFound){
		callback("ERRORS", null);
	}else{
		validation.newDocument.save(callback);
	}
};


module.exports.updateCustomer = (findQuery, updatedCustomerInfo, callback)=>{
	Customer.update(findQuery, updatedCustomerInfo, callback);
};


module.exports.deleteCustomer = (findQuery, callback)=>{
	Customer.remove(findQuery, callback);
};