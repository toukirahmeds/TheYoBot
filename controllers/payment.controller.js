const Payment = require("../models/Payment");
const mongooseAssist = require("mongoose-assist");


module.exports.getPaymentInfo = (findQuery, callback)=>{
	Payment.findOne(findQuery).exec(callback);
};

module.exports.getPaymentList = (findQuery, callback)=>{
	Payment.find(findQuery).exec(callback);
};

module.exports.createPayment = (paymentInfo, callback)=>{
	let validation = mongooseAssist.initValidationSave(paymentInfo, Payment);
	if(validation.errorFound){
		callback("ERRORS", null);
	}else{
		validation.newDocument.save(callback);
	}
};

module.exports.updatePayment = (findQuery, updatedPaymentInfo, callback)=>{
	Payment.update(findQuery, updatedPaymentInfo, callback);
};


module.exports.deletePayment = (findQuery, callback)=>{
	Payment.remove(findQuery, callback);
};