const User = require("../../models/User");
// console.log(User);
const Oauth2Client = require("./models/Oauth2Client");
// User.create({
// 	"username" : "admin",
// 	"email" : "admin@gmail.com",
// 	"password" : "adminPassword",
// 	"status" :  "activated",
// 	"name" : "Admin",
// 	"scope" : "user:read,write"
// },(error, userDoc)=>{
// 	if(error){
// 		console.log(error);
// 	}else{
// 		console.log(userDoc);
// 		Oauth2Client.create({
// 			"name" : "TheYoBot",
// 			"clientId" : "theyobotid",
// 			"clientSecret" : "theyobotsecret",
// 			"redirectUris" : ["https://www.theyobot.com"],
// 			"user" : userDoc._id,
// 			"grantTypes" : ["authorization_code","password","refresh_token","client_credentials"],
// 			"scope" : "user:read,write"
// 		},(error, clientDoc)=>{
// 			if(error){
// 				console.log(error);
// 			}else{
// 				console.log(clientDoc);
// 			}
// 		});
// 	}
// });