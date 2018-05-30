module.exports = (user, client, scope, callback)=>{
	console.log("validate scope");
	// console.log(user, client,scope);
	// console.log(scope && user.scope === scope && client.scope === scope);
	callback(false, scope && user.scope === scope && client.scope === scope?scope : false);
};