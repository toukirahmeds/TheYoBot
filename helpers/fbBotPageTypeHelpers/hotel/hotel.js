const businessPayloadKeywords = require("./businessPayloadKeywords");
const ServiceController = require("../../../controllers/service.controller");
const BookingController = require("../../../controllers/booking.controller");
const CustomerController = require("../../../controllers/customer.controller");


const getRoomListTemplate = (automationList, subscriberInfo, callback)=>{
	ServiceController.getServiceList({
		"page" : subscriberInfo.page._id,
		"type" : new RegExp("room", "gmi")
	},(error, serviceList)=>{
		if(error){
			callback(error, null);
		}else{
			let templates = [];
			if(automationList[0]["template"]["attachment"]["properties"]){
				let tempTemplate = automationList[0]["template"];
				tempTemplate["attachment"]["properties"] = [];
				for(let i = 0; i < serviceList.length; i++){
					tempTemplate["attachment"]["properties"].push({
						title : serviceList[i].name,
						subtitle : serviceList[i].price.currency + serviceList[i].price.amount + " per night",
						buttons : [{
							"title" : "Reserve",
							"type" : "postback",
							"payload" : "buy_service_" + serviceList[i]._id.toString()
						}]
					});
					if((i+1) % 3 == 0){
						templates.push(JSON.parse(JSON.stringify(tempTemplate)));
						tempTemplate = automationList[0]["template"];
						tempTemplate["attachment"]["properties"] = [];
					}else if((i+1) == serviceList.length){
						templates.push(JSON.parse(JSON.stringify(tempTemplate)));
					}
				}//for loop ends here
			}

			callback(null, templates);
		}
	});
};

const checkAndCreateCustomer = (subscriberInfo, callback)=>{
	CustomerController.getCustomerInfo({
		page : subscriberInfo.page._id,
		fbMessageSubscriber : subscriberInfo._id
	}, (error, customerList)=>{
		if(error){
			callback(error, null);
		}else if(customerList[0]){
			callback(null, customerList[0]);
		}else{
			CustomerController.createCustomer({
				"page" : subscriberInfo.page._id,
				"fbMessageSubscriber" : subscriberInfo._id,
				"platform" : "facebook",
				"name" : subscriberInfo.firstName + " " + subscriberInfo.lastName
			},callback);
		}
	});
};


const getAfterBuyTemplates = (subscriberInfo, callback)=>{
	callback(null, [{
		"templateType" : "generic",
		"message" : "You have successfully reserved the service."
	},{
		"type":"fbMessenger",
		"templateType" : "generic",
		"title" : "Payment Method",
		"message" : "How do you want to pay?",
		"quickReplies" : [{
			"content_type" : "text",
			"title" : "Bkash",
			"payload" : "pay_via_bkash"
		},{
			"content_type" : "text",
			"title" : "Master Card",
			"payload" : "pay_via_masterCard"
		},{
			"content_type" : "text",
			"title" : "VISA",
			"payload" : "pay_via_visaCard"
		},{
			"content_type" : "text",
			"title" : "Bank Transfer",
			"payload" : "pay_via_bankTransfer"
		}]
	}]);
};


const buyService = (serviceId, subscriberInfo, callback)=>{
	checkAndCreateCustomer(subscriberInfo, (error, customerInfo)=>{
		if(error){
			callback(error, null);
		}else{
			BookingController.createBooking({
				services : [serviceId],
				bookingStatus : "pending",
				fbMessageSubscriber : subscriberInfo._id,
				page : subscriberInfo.page._id,
				customer : customerInfo._id
			}, (error, bookingInfo)=>{
				if(error){
					callback(error, null);
				}else{
					getAfterBuyTemplates(subscriberInfo, callback);
				}
			});
		}
	});
};


const getPaymentCompleteTemplate = (callback)=>{
	callback(null, [{
		"templateType" : "generic",
		"message" : "Due to demo version, a fake payment has been made for you. Your room has been successfully booked."
	},{
		"templateType" : "generic",
		"message" : "Thank you very much for being our bot client! Please visit anytime for any kind of inquiry."
	},{
		"type":"fbMessenger",
		"templateType" : "generic",
		"title" : "Payment Method",
		"message" : "If you want to continue, please click any of the following buttons",
		"quickReplies" : [{
			"content_type" : "text",
			"title" : "Information",
			"payload" : "information"
		},{
			"content_type" : "text",
			"title" : "Reserve Rooms",
			"payload" : "room_list"
		},{
			"content_type" : "text",
			"title" : "Reserve for Meal",
			"payload" : "reserve_meal"
		},{
			"content_type" : "text",
			"title" : "Food Menu",
			"payload" : "food_menu"
		},{
			"content_type" : "text",
			"title" : "Contact Us",
			"payload" : "contact_us"
		}]
	}]);
};


const getAutomationDecision = (automationList, subscriberInfo, callback)=>{
	// console.log("GET AUTOMATION DECISION");
	let triggerKeyword = automationList[0]["trigger"]["triggerKeywords"][0];
	// console.log(automationList, triggerKeyword);
	if(triggerKeyword.indexOf(businessPayloadKeywords["roomList"]) >= 0){
		// console.log("GET ROOM LIST");
		getRoomListTemplate(automationList, subscriberInfo, callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["buyService"])>=0){
		buyService(triggerKeyword.split("_")[2], subscriberInfo, callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["payVia"])>=0){
		getPaymentCompleteTemplate(callback);
	}

};


module.exports = (automationList, subscriberInfo, callback)=>{
	getAutomationDecision(automationList, subscriberInfo, callback);
};