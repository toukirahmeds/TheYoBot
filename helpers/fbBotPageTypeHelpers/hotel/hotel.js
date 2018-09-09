const businessPayloadKeywords = require("./businessPayloadKeywords");
const ServiceController = require("../../../controllers/service.controller");
const ProductController = require("../../../controllers/product.controller");
const BookingController = require("../../../controllers/booking.controller");
const OrderController = require("../../../controllers/order.controller");
const CustomerController = require("../../../controllers/customer.controller");
const BusinessController = require("../../../controllers/business.controller");
const messageTemplates = require("./messageTemplates");

const getMainMenu = (callback)=>{
	callback(null, [messageTemplates.mainMenuTemplate]);
};

const getRoomList = (callback)=>{
	let template = messageTemplates.quickRepliesTemplate;
	template["message"] = "Please select a category!";
	template.quickReplies = [
		messageTemplates.getQuickReplyButton("Royal", businessPayloadKeywords["roomListCategory"] + "_royal"),
		messageTemplates.getQuickReplyButton("Premium",	businessPayloadKeywords["roomListCategory"] + "_premium"),
		messageTemplates.getQuickReplyButton("Honeymoon",	businessPayloadKeywords["roomListCategory"] + "_honeymoon"),
		messageTemplates.getQuickReplyButton("Normal", businessPayloadKeywords["roomListCategory"] + "_normal")
	];
	callback(null, [template]);
}


const getRoomListCategory = (category, subscriberInfo, callback)=>{
		// console.log("GET ROOM LIST");
		ServiceController.getServiceList({
			"page" : subscriberInfo.page._id,
			"type" : new RegExp(category, "gmi")
		},(error, serviceList)=>{
			if(error){
				callback(error, null);
			}else if(serviceList.length >= 2){
				let templates = [];
				let tempTemplate = messageTemplates.listTemplate;
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
					if((i+1) % 4 == 0){
						templates.push(JSON.parse(JSON.stringify(tempTemplate)));
						tempTemplate = messageTemplates.listTemplate;
						tempTemplate["attachment"]["properties"] = [];
					}else if((i+1) == serviceList.length){
						templates.push(JSON.parse(JSON.stringify(tempTemplate)));
					}
				}//for loop ends here
				callback(null, templates);
			}else if(serviceList.length == 0){
				callback(null, [messageTemplates.serviceNotAvailableTemplate]);
			}else{
				callback(null, [messageTemplates.serviceNotAvailableTemplate]);
			}
		});
};

const getFoodMenu = (subscriberInfo, callback)=>{
	let template = messageTemplates.quickRepliesTemplate;
	template["message"] = "Please select a category!";
	template.quickReplies = [
		messageTemplates.getQuickReplyButton("Bengali", businessPayloadKeywords["foodMenuCategory"] + "_bengali"),
		messageTemplates.getQuickReplyButton("Chinese",	businessPayloadKeywords["foodMenuCategory"] + "_chinese"),
		messageTemplates.getQuickReplyButton("Italian",	businessPayloadKeywords["foodMenuCategory"] + "_italian"),
		messageTemplates.getQuickReplyButton("Refreshment", businessPayloadKeywords["foodMenuCategory"] + "_refreshment")
	];
	callback(null, [template]);
};

const getFoodMenuCategory = (category, subscriberInfo, callback)=>{
	// console.log("GET FOOD MENU CATEGORY");
	ProductController.getProductList({
		"page" : subscriberInfo.page._id,
		"type" : new RegExp(category, "gmi")
	},(error, productList)=>{
		if(error){
			callback(error, null);
		}else if(productList.length >= 2){
			let templates = [];
			let tempTemplate = messageTemplates.listTemplate;
			tempTemplate["attachment"]["properties"] = [];
			for(let i = 0; i < productList.length; i++){
				tempTemplate["attachment"]["properties"].push({
					title : productList[i].name,
					subtitle : productList[i].price.currency + productList[i].price.amount,
					buttons : [{
						"title" : "Order",
						"type" : "postback",
						"payload" : businessPayloadKeywords["buyProduct"] + "_" + productList[i]._id.toString()
					}]
				});
				if((i+1) % 4 == 0){
					templates.push(JSON.parse(JSON.stringify(tempTemplate)));
					tempTemplate = messageTemplates.listTemplate;
					tempTemplate["attachment"]["properties"] = [];
				}else if((i+1) == productList.length){
					templates.push(JSON.parse(JSON.stringify(tempTemplate)));
				}
			}//for loop ends here
			callback(null, templates);
		}else if(productList.length == 0){
			callback(null, [messageTemplates.serviceNotAvailableTemplate]);
		}else{
			callback(null, [messageTemplates.serviceNotAvailableTemplate]);
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

const getProvideLocation = (callback)=>{
	callback(null, [messageTemplates.sendLocationTemplate]);
};

const saveDeliverLocationAndMakePayment = (locationInfo, subscriberInfo, callback)=>{
	OrderController.updateOrder({
		"page" : subscriberInfo.page._id,
		"fbMessageSubscriber" : subscriberInfo._id,
		"orderStatus" : "pending"
	},{
		"deliveryAddress" : {
			"longitude" : locationInfo.coordinates.long,
			"latitude" : locationInfo.coordinates.lat
		},
		"orderStatus" : "processing"
	},(error, updatedOrder)=>{
		if(error){
			callback(error, null);
		}else{
			getAfterBuyTemplates(subscriberInfo, callback);
		}
	});
};




const getAskForDelivery = (callback)=>{
	callback(null, [messageTemplates.askForDeliveryTemplate]);
};

const buyProduct = (productId, subscriberInfo, callback)=>{
	// console.log("Buy product");
	checkAndCreateCustomer(subscriberInfo, (error, customerInfo)=>{
		if(error){
			callback(error, null);
		}else{
			// console.log(customerInfo)
			OrderController.createOrder({
				products : [productId],
				orderStatus : "pending",
				fbMessageSubscriber : subscriberInfo._id,
				page : subscriberInfo.page._id,
				customer : customerInfo._id
			}, (error, orderInfo)=>{
				// console.log(error, orderInfo);
				if(error){
					callback(error, null);
				}else{
					// getAfterBuyTemplates(subscriberInfo, callback);
					getAskForDelivery(callback);
				}
			});
		}
	});
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

const sellProduct = (productId, subscriberInfo, callback)=>{
	callback(null, [messageTemplates.serviceNotAvailableTemplate]);
};

const sellService = (serviceId, subscriberInfo, callback)=>{
	callback(null, [messageTemplates.serviceNotAvailableTemplate]);
};

const bookProduct = (bookProduct, subscriberInfo, callback)=>{
	callback(null, [messageTemplates.serviceNotAvailableTemplate]);
};

const bookService = (serviceId, subscriberInfo, callback)=>{
	callback(null, [messageTemplates.serviceNotAvailableTemplate]);
};

const deliverProductDecision = (deliverTruth, subscriberInfo, callback)=>{
	if(deliverTruth.trim().toLowerCase() === "yes"){
		getProvideLocation(callback);
	}else{
		getAfterBuyTemplates(subscriberInfo, callback);
	}
};

const getPaymentCompleteTemplate = (callback)=>{
	callback(null, [{
		"templateType" : "generic",
		"message" : "Due to demo version, a fake payment has been made for you. Your room has been successfully booked."
	},{
		"templateType" : "generic",
		"message" : "Thank you very much for being our bot client! Please visit anytime for any kind of inquiry."
	},messageTemplates.mainMenuTemplate]);
};

const getServiceList = (subscriberInfo, callback)=>{
	ServiceController.getServiceList({
		"page" : subscriberInfo.page._id
	},(error, serviceList)=>{
		if(error){
			callback(error, null);
		}else if(serviceList.length>=2){
			let templates = [];

			let tempTemplate = messageTemplates.listTemplate;
			tempTemplate["attachment"]["properties"] = [];
			for(let i = 0; i < serviceList.length; i++){
				tempTemplate["attachment"]["properties"].push(messageTemplates.getListTemplateElement(
					serviceList[i].name,
					serviceList[i].price.currency + serviceList[i].price.amount + " per night",
					[{
						"title" : "Reserve",
						"type" : "postback",
						"payload" : "buy_service_" + serviceList[i]._id.toString()
					}]
				));	
				if((i+1) % 4 == 0){
					templates.push(JSON.parse(JSON.stringify(tempTemplate)));
					tempTemplate = automationList[0]["template"];
					tempTemplate["attachment"]["properties"] = [];
				}else if((i+1) == serviceList.length){
					templates.push(JSON.parse(JSON.stringify(tempTemplate)));
				}
			}//for loop ends here

			callback(null, templates);
			
		}else{

		}
	});
};




const getContactUs = (subscriberInfo, callback)=>{
	callback(null, [messageTemplates.contactUsTemplate]);
};

const getContactUsPhoneCall = (subscriberInfo, callback)=>{
	// console.log("contact us phone call");
	BusinessController.findMyBusiness({
		"page" : subscriberInfo.page._id
	}, (error, businessInfo)=>{
		if(error){
			callback(error, null);
		}else if(businessInfo[0]){
			// console.log(businessInfo[0]);
			if(businessInfo[0]['contactInfo'] && businessInfo[0]['contactInfo']['primaryPhone']){
				let template = messageTemplates.phoneCallTemplate;
				// console.log("================================");
				// template["message"] = "Please talk to a representative";
				// template["attachment"]["payload"]["buttons"][0]["payload"] = businessInfo[0].contactInfo.primaryPhone;
				template["attachment"]["properties"][0]["buttons"][0]["payload"] = businessInfo[0].contactInfo.primaryPhone;
				// console.log(template);
				callback(null, [template]);
			}else{
				// console.log("no contact info");
				callback(null, [messageTemplates.serviceNotAvailableTemplate]);
			}
		}else{
			callback(null, [messageTemplates.serviceNotAvailableTemplate]);
		}
	});
};

const getContactUsEmail = (subscriberInfo, callback)=>{
	BusinessController.findMyBusiness({
		"page" : subscriberInfo.page._id
	}, (error, businessInfo)=>{
		if(error){
			callback(error, null);
		}else if(businessInfo[0]){
			if(businessInfo[0].contactInfo && businessInfo[0].contactInfo.primaryEmail){
				let template = messageTemplates.emailTemplate;
				template["message"] = businessInfo[0].contactInfo.primaryEmail;
				callback(null, [template]);
			}else{
				callback(null, [messageTemplates.serviceNotAvailableTemplate]);
			}
		}else{
			callback(null, [messageTemplates.serviceNotAvailableTemplate]);
		}
	});
};

const getInformation = (subscriberInfo, callback)=>{
	callback(null, [messageTemplates.serviceNotAvailableTemplate]);
};

const getOurLocation = (subscriberInfo, callback)=>{
	callback(null, [messageTemplates.serviceNotAvailableTemplate]);
};


const getOurAddress = (subscriberInfo, callback)=>{
	BusinessController.findMyBusiness({
		"page" : subscriberInfo.page._id
	}, (error, businessInfo)=>{
		if(error){
			callback(error, null);
		}else if(businessInfo[0]){
			if(businessInfo[0].contactInfo && businessInfo[0].contactInfo.primaryAddress){
				let template = messageTemplates.ourAddressTemplate;
				if(businessInfo[0].contactInfo.primaryAddress.street) template["message"] += businessInfo[0].contactInfo.primaryAddress.street;
				if(businessInfo[0].contactInfo.primaryAddress.postalCode) template["message"] += ", " +  businessInfo[0].contactInfo.primaryAddress.postalCode;
				if(businessInfo[0].contactInfo.primaryAddress.city) template["message"] += ", " + businessInfo[0].contactInfo.primaryAddress.city;
				if(businessInfo[0].contactInfo.primaryAddress.state) template["message"] += ", " + businessInfo[0].contactInfo.primaryAddress.state;
				if(businessInfo[0].contactInfo.primaryAddress.country) template["message"] += ", " + businessInfo[0].contactInfo.primaryAddress.country;
				callback(null, [template]);
			}else{
				callback(null, [messageTemplates.serviceNotAvailableTemplate]);
			}
		}else{
			callback(null, [messageTemplates.serviceNotAvailableTemplate]);
		}
	});
};

const getPayVia = (paymentMethod, subscriberInfo, callback)=>{
	callback(null, [messageTemplates.serviceNotAvailableTemplate]);
};

const getPaymentOptions = (subscriberInfo, callback)=>{
	callback(null, [messageTemplates.serviceNotAvailableTemplate]);
};

const getMessageNotRecognised = (callback)=>{
	callback(null, [messageTemplates.messageNotRecognisedTemplate, messageTemplates.mainMenuTemplate]);
};



const makeStringTriggerKeywordDecision = (triggerKeyword, automationList, subscriberInfo, callback)=>{
	if(triggerKeyword.indexOf(businessPayloadKeywords["mainMenu"]) >= 0){
		getMainMenu(callback);
	}else if(triggerKeyword.trim().toLowerCase() == businessPayloadKeywords["roomList"].trim().toLowerCase() ){
		getRoomList(callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["roomListCategory"]) >= 0 ){
		getRoomListCategory(triggerKeyword.split("_")[3], subscriberInfo, callback);
	}else if(triggerKeyword.trim().toLowerCase() === businessPayloadKeywords["foodMenu"].trim().toLowerCase()){
		getFoodMenu(subscriberInfo, callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["foodMenuCategory"])>=0){
		getFoodMenuCategory(triggerKeyword.split("_")[3], subscriberInfo, callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["serviceList"])>=0){
		getServiceList(subscriberInfo, callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["packageList"])>=0){
		// getPaymentCompleteTemplate(callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["currentPromotions"])>=0){
		// getPaymentCompleteTemplate(callback);
	}else if(triggerKeyword.trim().toLowerCase() === businessPayloadKeywords["contactUs"].trim().toLowerCase()){
		getContactUs(subscriberInfo, callback);
	}else if(triggerKeyword.trim().toLowerCase() === businessPayloadKeywords["contactUsPhoneCall"].trim().toLowerCase()){
		getContactUsPhoneCall(subscriberInfo, callback);
	}else if(triggerKeyword.trim().toLowerCase() === businessPayloadKeywords["contactUsEmail"].trim().toLowerCase()){
		getContactUsEmail(subscriberInfo, callback);
	}else if(triggerKeyword.trim().toLowerCase() === businessPayloadKeywords["ourAddress"].trim().toLowerCase()){
		getOurAddress(subscriberInfo, callback);
	}else if(triggerKeyword.trim().toLowerCase() === businessPayloadKeywords["information"].trim().toLowerCase() ){
		getInformation(subscriberInfo, callback);
	}else if(triggerKeyword.trim().toLowerCase() === businessPayloadKeywords["ourLocation"].trim().toLowerCase()){
		getOurLocation(subscriberInfo, callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["buyProduct"])>=0){
		buyProduct(triggerKeyword.split("_")[2], subscriberInfo, callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["buyService"])>=0){
		buyService(triggerKeyword.split("_")[2], subscriberInfo, callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["sellProduct"])>=0){
		sellProduct(triggerKeyword.split("_")[2], subscriberInfo, callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["sellService"])>=0){
		sellService(triggerKeyword.split("_")[2], subscriberInfo, callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["bookService"])>=0){
		bookService(serviceId, subscriberInfo, callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["bookProduct"])>=0){
		bookProduct(serviceId, subscriberInfo, callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["deliverProduct"])>=0){
		deliverProductDecision(triggerKeyword.split("_")[2], subscriberInfo, callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["cancel"])>=0){
		// getPaymentCompleteTemplate(callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["wait"])>=0){
		// getPaymentCompleteTemplate(callback);
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["checkout"])>=0){
		// checkout();
	}else if(triggerKeyword.indexOf(businessPayloadKeywords["payVia"])>=0){
		getPaymentCompleteTemplate(callback);
	}else{
		getMessageNotRecognised(callback);
	}
};

const makeObjectTriggerKeywordDecision = (triggerKeyword, automationList, subscriberInfo, callback)=>{
	if(triggerKeyword.coordinates){
		saveDeliverLocationAndMakePayment(triggerKeyword, subscriberInfo, callback);
	}
};

const getAutomationDecision = (automationList, subscriberInfo, callback)=>{
	let triggerKeyword = automationList[0]["trigger"]["triggerKeywords"][0];
	// console.log("get automation list", triggerKeyword);
	// console.log(typeof triggerKeyword);
	// console.log(typeof triggerKeyword == "string");
	if(typeof triggerKeyword == "string"){
		makeStringTriggerKeywordDecision(triggerKeyword, automationList, subscriberInfo, callback);
	}else{
		makeObjectTriggerKeywordDecision(triggerKeyword, automationList, subscriberInfo, callback);
	}
	

};


module.exports = (automationList, subscriberInfo, callback)=>{
	getAutomationDecision(automationList, subscriberInfo, callback);
};