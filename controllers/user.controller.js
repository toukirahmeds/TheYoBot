const User = require("../models/User");


module.exports.updateUser = (findQuery, updateInfo, callback)=>{
	User.findOneAndUpdate(findQuery, updateInfo, callback);
};