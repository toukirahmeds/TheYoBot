const Broadcast = require("../models/Broadcast");


module.exports.getBroadcastInfo = (findQuery, callback)=>{
	Broadcast.findOne(findQuery).exec(callback);
};


module.exports.getBroadcastList = (findQuery, callback)=>{
	Broadcast.find(findQuery).exec(callback);
};

module.exports.createBroadcast = (broadcastInfo, callback)=>{
	let validation = mongooseAssist.initValidationSave(broadcastInfo, Broadcast);

	if(validation.errorFound){
		callback(validation.errors, null);
	}else{
		validation.newDocument.save(callback);
	}
};

module.exports.updateBroadcast = (findQuery, broadcastInfo, callback)=>{
	Broadcast.update(findQuery, broadcastInfo, callback);
};

module.exports.deleteBroadcast = (findQuery, callback)=>{
	Broadcast.remove(findQuery, callback);
};