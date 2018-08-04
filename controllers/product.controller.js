const Product = require("../models/Product");
const mongooseAssist = require("mongoose-assist");

module.exports.getProductInfo = (findQuery, callback)=>{
	Product.findOne(findQuery, callback);
};


module.exports.getProductList = (findQuery, callback)=>{
	Product.find(findQuery).exec(callback);
};


module.exports.createProduct = (productInfo, callback)=>{
	let validation = mongooseAssist.initValidationSave(productInfo, Product);

	if(validation.errorFound){
		callback("Errors", null);
	}else{
		validation.newDocument.save(callback);
	}
};


module.exports.updateProduct = (findQuery, updatedProductInfo, callback)=>{
	Product.update(findQuery, updatedProductInfo, callback);
};


module.exports.deleteProduct = (findQuery, callback)=>{
	Product.remove(findQuery, callback);
};