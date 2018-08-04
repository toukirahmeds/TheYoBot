const mongoose = require("mongoose");


const MembershipSchema = new mongoose.Schema({
	"user" : {
		"type" : mongoose.Schema.Types.ObjectId,
		"ref" : "User"
	}	
},{
	"timestamps" : true
});


module.exports = mongoose.model("Membership", MembershipSchema, "memberships");