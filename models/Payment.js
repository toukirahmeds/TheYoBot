const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({},{
	"timestamps" : true
});

module.exports = mongoose.model("Payment", PaymentSchema, "payments");