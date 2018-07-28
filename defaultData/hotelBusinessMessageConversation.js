const BotMessageConstants = require("../helpers/fbBotMessageConstantsHelper");

module.exports = [{
	"template" : {
		"type" : "fbMessenger",
		"templateType" : "generic",
		"title" : "Greetings",
		"message" : "Hello, greetings from "+ BotMessageConstants.Business.BusinessName + "!",
		"page" : "",
		"user" : ""
	},
	"automation" : {
		"type" : "fbMessenger",
		"trigger" : {
			"triggerType" : "keyword",
			"triggerKeywords" : []
		},
		"position" : 0,
		"previousPosition" : 0,
		"previousAutomation" : null,
		"page" : "",
		"user" : ""
	}
},{
	"template" : {
		"type":"fbMessenger",
		"templateType" : "generic",
		"title" : "Ask For Help",
		"message" : "Please click one to go to next step!",
		"quickReplies" : [{
			"content_type" : "text",
			"title" : "Information",
			"payload" : "information"
		},{
			"content_type" : "text",
			"title" : "Reserve Room(s)",
			"payload" : "reserve_room"
		},{
			"content_type" : "text",
			"title" : "Reserve For Meal",
			"payload" : "reserve_meal"
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
		}],
		"page" : "",
		"user" : ""
	},
	"automation" : {
		"type" : "fbMessenger",
		"trigger" : {
			"triggerType" : "keyword",
			"triggerKeywords" : []
		},
		"position" : 1,
		"previousPosition" : 1,
		"previousAutomation" : null,
		"page" : "",
		"user" : ""
	}
},{
	"template" : {
		"type" : "fbMessenger",
		"templateType" : "list",
		"title" : "Room List",
		"attachment" : {
			"type" : "template",
			"topElementStyle" : "compact",
			"properties" : [{
					"title" : "Premier",
					"subtitle" : "$100 per night",
					"buttons" : [{
						"title" : "View",
						"type" : "web_url",
						"webview_height_ratio" : "tall",
						"url" : "https://www.google.com",
						"fallback_url" : "https://www.google.com",
						"messenger_extensions" : true
					},{
						"title" : "Reserve",
						"type" : "postback",
						"payload" : "reserve_premier"
					}]
				},{
					"title" : "Deluxe",
					"subtitle" : "$500 per night",
					"buttons" : [{
						"title" : "View",
						"type" : "web_url",
						"webview_height_ratio" : "tall",
						"url" : "https://www.google.com",
						"fallback_url" : "https://www.google.com",
						"messenger_extensions" : true
					},{
						"title" : "Reserve",
						"type" : "postback",
						"payload" : "reserve_deluxe"
					}]
				},{
					"title" : "Suites",
					"subtitle" : "$200 per night",
					"buttons" : [{
						"title" : "View",
						"type" : "web_url",
						"webview_height_ratio" : "tall",
						"url" : "https://www.google.com",
						"fallback_url" : "https://www.google.com",
						"messenger_extensions" : true
					},{
						"title" : "Reserve",
						"type" : "postback",
						"payload" : "reserve_suites"
					}]
				},{
					"title" : "Executive Suites",
					"subtitle" : "$1000 per night",
					"buttons" : [{
						"title" : "View",
						"type" : "web_url",
						"webview_height_ratio" : "tall",
						"url" : "https://www.google.com",
						"fallback_url" : "https://www.google.com",
						"messenger_extensions" : true
					},{
						"title" : "Reserve",
						"type" : "postback",
						"payload" : "reserve_executive_suites"
					}]
				}]
			},
		"page" : "",
		"user" : ""
	},
	"automation" : {
		"type" : "fbMessenger",
		"trigger" : {
			"triggerType" : "keyword",
			"triggerKeywords" : ["reserve_room"]
		},
		"position" : 2,
		"previousPosition" : 1,
		"previousAutomation" : null,
		"page" : "",
		"user" : ""
	}
		
	
	
},{
	"template" : {
		"type" : "fbMessenger",
		"templateType" : "generic",
		"title" : "Service Not Available",
		"message" : "Sorry "+BotMessageConstants.FbMessageSubscriber.Honorific+"! This room type is not vacant now! Reserved until "+BotMessageConstants.Service.ServiceNextAvailableTime,
		"page" : "",
		"user" : ""
	},
	"automation" : {
		"type" : "fbMessenger",
		"trigger" : {
			"triggerType" : "keyword",
			"triggerKeywords" : []
		},
		"position" : 3,
		"previousPosition" : 2,
		"previousAutomation" : null,
		"page" : "",
		"user" : ""
	}
},{
	"template" : {
		"type" : "fbMessenger",
		"templateType" : "generic",
		"title" : "Service Available",
		"message" : BotMessageConstants.Service.ServiceTotalNumberAvailable + " rooms of this type are available for reservation.",
		"page" : "",
		"user" : ""
	},
	"automation" : {
		"type" : "fbMessenger",
		"trigger" : {
			"triggerType" : "keyword",
			"triggerKeywords" : []
		},
		"position" : 4,
		"previousPosition" : 2,
		"previousAutomation" : null,
		"page" : "",
		"user" : ""
	}
},{
	"template" : {
		"type" : "fbMessenger",
		"templateType" : "generic",
		"title" : "Phone Call Button",
		"attachment" : {
			"type" : "template",
			"payload" : {
				"template_type" : "button",
				"text" : "Please talk to a representative",
				"buttons" : [{
					"type" : "phone_number",
					"title" : "Call Representative",
					"payload" : "+8801825837663"
				}]
			}
		},
		"page" : "",
		"user" : ""
	},
	"automation" : {
		"type" : "fbMessenger",
		"trigger" : {
			"triggerType" : "keyword",
			"triggerKeywords" : ["contact_us"]
		},
		"position" : 5,
		"previousPosition" : 1,
		"previousAutomation" : null,
		"page" : "",
		"user" : ""
	}
}];