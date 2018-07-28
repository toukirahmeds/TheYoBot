const oauth2Server = require("oauth2-server");

module.exports = new oauth2Server({
	"model" : {
		"generateAccessToken" : require("./oauth2Models/generateAccessToken"),
		"generateAuthorizationCode" : require("./oauth2Models/generateAuthorizationCode"),
		"generateRefreshToken" : require("./oauth2Models/generateRefreshToken"),
		"getAccessToken" : require("./oauth2Models/getAccessToken"),
		"getClient" : require("./oauth2Models/getClient"),
		"getRefreshToken" : require("./oauth2Models/getRefreshToken"),
		"getAuthorizationCode" : require("./oauth2Models/getAuthorizationCode"),
		"getUser" : require("./oauth2Models/getUser"),
		"getUserFromClient" : require("./oauth2Models/getUserFromClient"),
		"revokeAuthorizationCode" : require("./oauth2Models/revokeAuthorizationCode"),
		"revokeToken" : require("./oauth2Models/revokeToken"),
		"saveAuthorizationCode" : require("./oauth2Models/saveAuthorizationCode"),
		"saveToken" : require("./oauth2Models/saveToken"),
		// "validateScope" : require("./oauth2Models/validateScope"),
		"verifyScope" : require("./oauth2Models/verifyScope")
	},
	"accessTokenLifetime" : 60*10
});