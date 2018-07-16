module.exports.asyncPromiseAll = (promiseArray, callback)=>{
	Promise.all(promiseArray).then((result)=>{
		callback(null, result);
	});
};