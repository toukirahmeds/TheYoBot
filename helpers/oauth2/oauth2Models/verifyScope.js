module.exports = (accessToken, scope, callback)=>{
	if(accessToken.scope){
		let requestedScope = scope.split(",").map((elem)=>{
			return elem.trim();
		});
		let authorizedScope = accessToken.scope.split(",").map((elem)=>{
			return elem.trim();
		});
		return requestedScope.every((elem)=>{
			return authorizedScope.indexOf(elem)>=0;
		});
	}else{
		callback(null, false);
	}
};