module.exports.listTemplate = {
	"type" : "fbMessenger",
	"templateType" : "list",
	"title" : "",
	"attachment" : {
		"type" : "template",
		"topElementStyle" : "compact",
		"properties" : []
		}
};

module.exports.getListTemplateElement = (title, subtitle, imageUrl, buttons)=>{
	let element = {
	  "title": title,
	  "subtitle": subtitle,
	  "buttons": buttons
	};
	if(imageUrl) element["imageUrl"] = imageUrl;
	return element;
};


module.exports.quickRepliesTemplate  = {
	"type":"fbMessenger",
	"templateType" : "generic",
	"title" : "Ask For Help",
	"message" : "",
	"quickReplies" : []
};

module.exports.getQuickReplyButton = (title, payload)=>{
	return {
		"content_type" : "text",
		"title" : title,
		"payload" : payload
	};
};

module.exports.mainMenuTemplate = {
	"type":"fbMessenger",
	"templateType" : "generic",
	"title" : "Select One to continue",
	"message" : "Please click one to go to next step!",
	"quickReplies" : [{
		"content_type" : "text",
		"title" : "Information",
		"payload" : "information"
	},{
		"content_type" : "text",
		"title" : "Reserve Room(s)",
		"payload" : "room_list"
	},{
		"content_type" : "text",
		"title" : "Food Menu",
		"payload" : "food_menu"
	},{
		"content_type" : "text",
		"title" : "Our Location",
		"payload" : "our_location"
	},{
		"content_type" : "text",
		"title" : "Contact Us",
		"payload" : "contact_us"
	}]
};


module.exports.contactUsTemplate = {
	"type":"fbMessenger",
	"templateType" : "generic",
	"title" : "Contact Us",
	"message" : "Please select any one to contact us!",
	"quickReplies" : [{
		"content_type" : "text",
		"title" : "Phone Call",
		"payload" : "contact_us_phoneCall"
	},{
		"content_type" : "text",
		"title" : "Email",
		"payload" : "contact_us_email"
	}]
};


module.exports.phoneCallTemplate = {
	"type" : "fbMessenger",
	"templateType" : "generic",
	"title" : "Phone Call Button",
	"message" : "Please talk to a representative",
	"attachment" : {
		"type" : "template",
		"properties" : [{
			"template_type" : "button",
			"text" : "Please talk to a representative",
			"buttons" : [{
				"type" : "phone_number",
				"title" : "Call Representative",
				"payload" : ""
			}]
		}]
		// "payload" : {
		// 	"template_type" : "button",
		// 	"text" : "Please talk to a representative",
		// 	"buttons" : [{
		// 		"type" : "phone_number",
		// 		"title" : "Call Representative",
		// 		"payload" : ""
		// 	}]
		// }
	}
};

module.exports.emailTemplate = {
	"type" : "fbMessenger",
	"templateType" : "generic",
	"title" : "Our Email",
	"message" : ""
};


module.exports.ourAddressTemplate = {
	"type" : "fbMessenger",
	"templateType" : "generic",
	"title" : "Our Address",
	"message" : ""
};


module.exports.askForDeliveryTemplate = {
	"type":"fbMessenger",
	"templateType" : "generic",
	"title" : "Ask For Help",
	"message" : "Do you want it delivered?",
	"quickReplies" : [{
		"content_type" : "text",
		"title" : "Yes",
		"payload" : "deliver_product_yes"
	},{
		"content_type" : "text",
		"title" : "No",
		"payload" : "deliver_product_no"
	}]
}


module.exports.serviceNotAvailableTemplate = {
	"type" : "fbMessenger",
	"templateType" : "generic",
	"title" : "Service Not Available",
	"message" : "Sorry! The service is not available in the demo version."
};

module.exports.sendLocationTemplate = {
	"type":"fbMessenger",
	"templateType" : "generic",
	"title" : "Ask For Help",
	"message" : "Click the location button and select your location!",
	"quickReplies" : [{
		"content_type" : "location"
	}]
}


module.exports.messageNotRecognisedTemplate = {
	"type" : "fbMessenger",
	"templateType" : "generic",
	"title" : "Message not recognised",
	"message" : "Sorry! We haven't recognised your message"
};