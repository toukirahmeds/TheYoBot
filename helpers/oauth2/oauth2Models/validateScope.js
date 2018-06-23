module.exports = (user, client, scope, callback)=>{
	callback(false, scope && user.scope === scope && client.scope === scope?scope : false);
};