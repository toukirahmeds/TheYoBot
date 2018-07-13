module.exports = [{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Location",
	"message" : "Please share your location",
	"quick_replies" : [{
		"content_type" : "location"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Delivery Location",
	"message" : "Please share your delivery location",
	"quick_replies" : [{
		"content_type" : "location"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Contact Phone Number",
	"message" : "Please let us know your contact phone number!",
	"quick_replies" : [{
		"content_type" : "user_phone_number"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Contact Email Address",
	"message" : "Please let us know your contact email address!",
	"quick_replies" : [{
		"content_type" : "user_email"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Ask For Help(Retail)",
	"message" : "Please click to go to next step",
	"quick_replies" : [{
		"content_type":"text",
        "title":"Information",
        "payload":"INFORMATION"
	},{
		"content_type" : "text",
		"title" : "Start Shopping",
		"payload" : "START_SHOPPING"
	},{
		"content_type" : "text",
		"title" : "Our Location",
		"payload" : "OUR_LOCATION"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Ask For Help(Hotel)",
	"message" : "Please click to go to next step",
	"quick_replies" : [{
		"content_type":"text",
        "title":"Information",
        "payload":"INFORMATION"
	},{
		"content_type" : "text",
		"title" : "Get Reservation",
		"payload" : "GET_RESERVATION"
	},{
		"content_type" : "text",
		"title" : "Our Location",
		"payload" : "OUR_LOCATION"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Ask For Help(Food)",
	"message" : "Please click to go to next step",
	"quick_replies" : [{
		"content_type":"text",
        "title":"Information",
        "payload":"INFORMATION"
	},{
		"content_type" : "text",
		"title" : "Order Food",
		"payload" : "ORDER_FOOD"
	},{
		"content_type" : "text",
		"title" : "Our Location",
		"payload" : "OUR_LOCATION"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Ask For Help(Transportation)",
	"message" : "Please click to go to next step",
	"quick_replies" : [{
		"content_type":"text",
        "title":"Information",
        "payload":"INFORMATION"
	},{
		"content_type" : "text",
		"title" : "Book Ticket(s)",
		"payload" : "BOOK_TICKET"
	},{
		"content_type" : "text",
		"title" : "Our Location",
		"payload" : "OUR_LOCATION"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Ask For Help(Transportation)",
	"message" : "Please click to go to next step",
	"quick_replies" : [{
		"content_type":"text",
        "title":"Information",
        "payload":"INFORMATION"
	},{
		"content_type" : "text",
		"title" : "Book Ticket(s)",
		"payload" : "BOOK_TICKET"
	},{
		"content_type" : "text",
		"title" : "Our Location",
		"payload" : "OUR_LOCATION"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Payment Method(Delivery)",
	"message" : "Please choose your preferred payment method!",
	"quick_replies" : [{
		"content_type":"text",
        "title":"Pay on delivery",
        "payload":"PAY_ON_DELIVERY"
	},{
		"content_type" : "text",
		"title" : "Credit Card",
		"payload" : "CREDIT_CARD"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Payment Method(On Spot)",
	"message" : "Please choose your preferred payment method!",
	"quick_replies" : [{
		"content_type":"text",
        "title":"Cash",
        "payload":"CASH"
	},{
		"content_type" : "text",
		"title" : "Credit Card",
		"payload" : "CREDIT_CARD"
	}]
},{
	"type" : "fbMessengerDefault",
	"templateType" : "generic",
	"title" : "Credit Card Options",
	"message" : "Please select your card for payment!",
	"quick_replies" : [{
		"content_type":"text",
        "title":"Visa",
        "payload":"VISA"
	},{
		"content_type" : "text",
		"title" : "Master Card",
		"payload" : "MASTER_CARD"
	},{
		"content_type" : "text",
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
	
}];