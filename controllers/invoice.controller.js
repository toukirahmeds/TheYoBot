const Invoice = require("../models/Invoice");
const mongooseAssist = require("mongoose-assist");

module.exports.getInvoiceInfo = (findQuery, callback)=>{
	Invoice.findOne(findQuery).exec(callback);
};

module.exports.getInvoiceList = (findQuery, callback)=>{
	Invoice.find(findQuery).exec(callback);
};


module.exports.createInvoice = (invoiceInfo, callback)=>{
	let validation = mongooseAssist.initValidationSave(invoiceInfo, Invoice);
	if(validation.errorFound){
		callback("ERRORS", null);
	}else{
		validation.newDocument.save(callback);
	}
};


module.exports.updateInvoice = (findQuery, invoiceInfo, callback)=>{
	Invoice.update(findQuery, invoiceInfo, callback);
};


module.exports.deleteInvoice = (findQuery, callback)=>{
	Invoice.remove(findQuery, callback);
};