module.exports = [{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Location",
	"message" : "Please share your location",
	"quickReplies" : [{
		"contentType" : "location"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Delivery Location",
	"message" : "Please share your delivery location",
	"quickReplies" : [{
		"contentType" : "location"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Contact Phone Number",
	"message" : "Please let us know your contact phone number!",
	"quickReplies" : [{
		"contentType" : "user_phone_number"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Contact Email Address",
	"message" : "Please let us know your contact email address!",
	"quickReplies" : [{
		"contentType" : "user_email"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Ask For Help(Retail)",
	"message" : "Please click to go to next step",
	"quickReplies" : [{
		"contentType":"text",
        "title":"Information",
        "payload":"INFORMATION"
	},{
		"contentType" : "text",
		"title" : "Start Shopping",
		"payload" : "START_SHOPPING"
	},{
		"contentType" : "text",
		"title" : "Our Location",
		"payload" : "OUR_LOCATION"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Ask For Help(Hotel)",
	"message" : "Please click to go to next step",
	"quickReplies" : [{
		"contentType":"text",
        "title":"Information",
        "payload":"INFORMATION"
	},{
		"contentType" : "text",
		"title" : "Get Reservation",
		"payload" : "GET_RESERVATION"
	},{
		"contentType" : "text",
		"title" : "Our Location",
		"payload" : "OUR_LOCATION"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Ask For Help(Food)",
	"message" : "Please click to go to next step",
	"quickReplies" : [{
		"contentType":"text",
        "title":"Information",
        "payload":"INFORMATION"
	},{
		"contentType" : "text",
		"title" : "Order Food",
		"payload" : "ORDER_FOOD"
	},{
		"contentType" : "text",
		"title" : "Our Location",
		"payload" : "OUR_LOCATION"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Ask For Help(Transportation)",
	"message" : "Please click to go to next step",
	"quickReplies" : [{
		"contentType":"text",
        "title":"Information",
        "payload":"INFORMATION"
	},{
		"contentType" : "text",
		"title" : "Book Ticket(s)",
		"payload" : "BOOK_TICKET"
	},{
		"contentType" : "text",
		"title" : "Our Location",
		"payload" : "OUR_LOCATION"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Ask For Help(Transportation)",
	"message" : "Please click to go to next step",
	"quickReplies" : [{
		"contentType":"text",
        "title":"Information",
        "payload":"INFORMATION"
	},{
		"contentType" : "text",
		"title" : "Book Ticket(s)",
		"payload" : "BOOK_TICKET"
	},{
		"contentType" : "text",
		"title" : "Our Location",
		"payload" : "OUR_LOCATION"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Payment Method(Delivery)",
	"message" : "Please choose your preferred payment method!",
	"quickReplies" : [{
		"contentType":"text",
        "title":"Pay on delivery",
        "payload":"PAY_ON_DELIVERY"
	},{
		"contentType" : "text",
		"title" : "Credit Card",
		"payload" : "CREDIT_CARD"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Payment Method(On Spot)",
	"message" : "Please choose your preferred payment method!",
	"quickReplies" : [{
		"contentType":"text",
        "title":"Cash",
        "payload":"CASH"
	},{
		"contentType" : "text",
		"title" : "Credit Card",
		"payload" : "CREDIT_CARD"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Credit Card Options",
	"message" : "Please select your card for payment!",
	"quickReplies" : [{
		"contentType":"text",
        "title":"Visa",
        "payload":"VISA"
	},{
		"contentType" : "text",
		"title" : "Master Card",
		"payload" : "MASTER_CARD"
	},{
		"contentType" : "text",
		"title" : "American Express",
		"payload" : "AMERICAN_EXPRESS"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Make Credit Card Payment",
	"attachment" : {
		"type" : "template",
		"payload" : {
			"template_type" : "button",
			"buttons" : [{
				"title" : "Credit Card Payment",
				"type" : "web_url",
				"webview_height_ratio" : "tall",
				"url" : "https://www.google.com",
				"fallback_url" : "https://www.google.com",
				"messenger_extensions" : true
			}]
		}
	}
	
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Select Language",
	"message" : "Please select your language",
	"quickReplies" : [{
		"contentType":"text",
        "title":"English",
        "payload":"english"
	},{
		"contentType" : "text",
		"title" : "Bengali",
		"payload" : "bengali"
	},{
		"contentType" : "text",
		"title" : "Spanish",
		"payload" : "spanish"
	},{
		"contentType" : "text",
		"title" : "Deutsch",
		"payload" : "deutsch"
	},{
		"contentType" : "text",
		"title" : "Hindi",
		"payload" : "hindi"
	},{
		"contentType" : "text",
		"title" : "Japanese",
		"payload" : "japanese"
	},{
		"contentType" : "text",
		"title" : "French",
		"payload" : "french"
	},{
		"contentType" : "text",
		"title" : "Arabic",
		"payload" : "arabic"
	},{
		"contentType" : "text",
		"title" : "Chinese",
		"payload" : "chinese"
	},{
		"contentType" : "text",
		"title" : "Russian",
		"payload" : "russian"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Select Primary Language",
	"message" : "Please select your primary language",
	"quickReplies" : [{
		"contentType":"text",
        "title":"English",
        "payload":"english"
	},{
		"contentType" : "text",
		"title" : "Bengali",
		"payload" : "bengali"
	},{
		"contentType" : "text",
		"title" : "Spanish",
		"payload" : "spanish"
	},{
		"contentType" : "text",
		"title" : "Deutsch",
		"payload" : "deutsch"
	},{
		"contentType" : "text",
		"title" : "Hindi",
		"payload" : "hindi"
	},{
		"contentType" : "text",
		"title" : "Japanese",
		"payload" : "japanese"
	},{
		"contentType" : "text",
		"title" : "French",
		"payload" : "french"
	},{
		"contentType" : "text",
		"title" : "Arabic",
		"payload" : "arabic"
	},{
		"contentType" : "text",
		"title" : "Chinese",
		"payload" : "chinese"
	},{
		"contentType" : "text",
		"title" : "Russian",
		"payload" : "russian"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Select Secondary Language",
	"message" : "Please select your secondary language",
	"quickReplies" : [{
		"contentType":"text",
        "title":"English",
        "payload":"english"
	},{
		"contentType" : "text",
		"title" : "Bengali",
		"payload" : "bengali"
	},{
		"contentType" : "text",
		"title" : "Spanish",
		"payload" : "spanish"
	},{
		"contentType" : "text",
		"title" : "Deutsch",
		"payload" : "deutsch"
	},{
		"contentType" : "text",
		"title" : "Hindi",
		"payload" : "hindi"
	},{
		"contentType" : "text",
		"title" : "Japanese",
		"payload" : "japanese"
	},{
		"contentType" : "text",
		"title" : "French",
		"payload" : "french"
	},{
		"contentType" : "text",
		"title" : "Arabic",
		"payload" : "arabic"
	},{
		"contentType" : "text",
		"title" : "Chinese",
		"payload" : "chinese"
	},{
		"contentType" : "text",
		"title" : "Russian",
		"payload" : "russian"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Select Secondary Language",
	"message" : "Please select your secondary language",
	"quickReplies" : [{
		"contentType":"text",
        "title":"English",
        "payload":"english"
	},{
		"contentType" : "text",
		"title" : "Bengali",
		"payload" : "bengali"
	},{
		"contentType" : "text",
		"title" : "Spanish",
		"payload" : "spanish"
	},{
		"contentType" : "text",
		"title" : "Deutsch",
		"payload" : "deutsch"
	},{
		"contentType" : "text",
		"title" : "Hindi",
		"payload" : "hindi"
	},{
		"contentType" : "text",
		"title" : "Japanese",
		"payload" : "japanese"
	},{
		"contentType" : "text",
		"title" : "French",
		"payload" : "french"
	},{
		"contentType" : "text",
		"title" : "Arabic",
		"payload" : "arabic"
	},{
		"contentType" : "text",
		"title" : "Chinese",
		"payload" : "chinese"
	},{
		"contentType" : "text",
		"title" : "Russian",
		"payload" : "russian"
	}]
}];