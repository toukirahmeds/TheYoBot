const Order = require("../models/Order");
const mongooseAssist = require("mongoose-assist");

module.exports.getOrderInfo = (findQuery, callback)=>{
	Order.find(findQuery, callback);
};

module.exports.getOrderList = (findQuery, callback)=>{
	Order.find(findQuery).populate({
		"path" : "fbMessageSubscriber",
		"model" : "FbMessageSubscriber"
	}).exec(callback);
};


module.exports.createOrder = (orderInfo, callback)=>{
	let validation = mongooseAssist.initValidationSave(orderInfo, Order);
	if(validation.errorFound){
		callback("ERRORS", null);
	}else{
		validation.newDocument.save(callback);
	}
};


module.exports.updateOrder = (findQuery, updatedOrderInfo, callback)=>{
	Order.update(findQuery, updatedOrderInfo, callback);
};


module.exports.deleteOrder = (findQuery, callback)=>{
	Order.remove(findQuery, callback);
};