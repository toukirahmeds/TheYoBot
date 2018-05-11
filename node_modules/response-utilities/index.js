const STATUS_OK = 200;
const STATUS_BAD_REQUEST = 400;
const STATUS_UNAUTHORIZED = 401;


module.exports.successResponse = (res, message, data)=>{
	return res.status(STATUS_OK).json({
		"success" : true,
		"message" : message,
		"data" : data
	});
};


module.exports.errorResponse = (res, data)=>{
	res.status(STATUS_BAD_REQUEST).json({
		"success" : false,
		"message" : "Oops! Error found in the server.",
		"data" : data
	});
};

module.exports.unauthorizedResponse = (res)=>{
	return res.status(STATUS_UNAUTHORIZED).json({
		"success" : false,
		"message" : "Unauthorized"
	});
};