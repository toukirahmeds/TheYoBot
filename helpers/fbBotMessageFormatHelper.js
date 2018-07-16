const lodash = require("lodash");

/*=============================================
=            Import of controllers            =
=============================================*/
const FbMessageSubscriberController = require("../controllers/fbMessageSubscriber.controller");
const CustomerController = require("../controllers/customer.controller");
const BusinessController = require("../controllers/business.controller");
const OrderController = require("../controllers/order.controller");
const InvoiceController = require("../controllers/invoice.controller");
const ProductController = require("../controllers/product.controller");
const ServiceController = require("../controllers/service.controller");

/*=====  End of Import of controllers  ======*/


/*=====================================
=            bot variables            =
=====================================*/
//Fb Message Subscriber
const FbMessageSubscriber = {
	FirstName : ["%{{FirstName}}","firstName"],
 	LastName : ["%{{LastName}}","lastName"],
 	FullName : ["%{{FullName}}","fullName"],
 	Salutation : ["%{{Salutation}}","salutation"],
 	Honorific : ["%{{Honorific}}","honorific"],
 	Gender : ["%{{Gender}}","gender"],
 	ProfilePicture : ["%{{ProfilePicture}}", "profilePic"],
 	CurrentTime : ["%{{CurrentTime}}", null],
 	LocationFullAddress : ["%{{LocationFullAddress}}", null]
};


//Customer
const Customer = {
	CustomerEmail : "%{{CustomerEmail}}",
	CustomerPhone  :"%{{CustomerPhone}}",
	CustomerFullAddress  :"%{{CustomerFullAddress}}",
	CustomerCity : "%{{CustomerCity}}",
	CustomerState : "%{{CustomerState}}",
	CustomerCountry  :"%{{CustomerCountry}}",
	CustomerBirthDate  :"%{{CustomerBirthDate}}",
	CustomerMaritalStatus : "%{{MaritalStatus}}",
	CustomerSpouseBirthDate : "%{{CustomerSpouseBirthDate}}",
	CustomerBoughtTimes  :"%{{CustomerBoughtTimes}}",
	CustomerTotalPurchasedAmount : "%{{CustomerTotalPurchasedAmount}}",
	CustomerPurchasedCurrency : "%{{CustomerPurchasedCurrency}}",
	CustomerLastPurchaseDate  :"%{{CustomerLastPurchaseDate}}",
	CustomerCurrentDiscountPackage  :"%{{CustomerCurrentDiscountPackage}}"
};





//Business
const Business = {
	 BusinessName : "%{{BusinessName}}",
	 BusinessFullLocation : "%{{BusinessLocation}}",
	 BusinessStreet : "%{{BusinessStreet}}",
	 BusinessCity  :"%{{BusinessCity}}",
	 BusinessState : "%{{BusinessState}}",
	 BusinessCountry : "%{{BusinessCountry}}",
	 BusinessEmail : "%{{BusinessEmail}}",
	 BusinessPhone  :"%{{BusinessPhone}}",
	 BusinessCategory  :"%{{BusinessCategory}}",
	 BusinessTiming  :"%{{BusinessTiming}}",
	 AcceptablePaymentMethods  :"%{{AcceptablePaymentMethods}}",
	 PaymentMethodDiscount : "%{{PaymentMethodDiscount}}"
};



//Order
const Order = {
	OrderDeliveryTiming : "%{{OrderDeliveryTiming}}",
	OrderDeliveryDuration  :"%{{OrderDeliveryDuration}}",
	OrderDeliveryFullAddress : "%{{OrderDeliveryFullAddress}}",
	OrderPending  :"%{{OrderPending}}",
	OrderPendingEstimatedDeliveryTime  :"%{{OrderPendingEstimatedDeliveryTime}}",
	OrderPendingDuration  :"%{{OrderPendingDuration}}",
	OrderPendingFullAddress : "%{{OrderPendingFullAddress}}",
	LastOrder : "%{{LastOrder}}"
};



//Invoice
const Invoice = {
	InvoiceTotalAmount  :"%{{InvoiceTotalAmount}}",
	InvoiceCurrency : "%{{InvoiceCurrency}}",
	LastInvoiceTotalAmount  :"%{{LastInvoiceTotalAmount}}",
	LastInvoiceDate : "%{{LastInvoiceDate}}"
};





//Product
const Product = {
	ProductName :"%{{ProductName}}",
	ProductStockStatus :"%{{ProductStockStatus}}",
	OtherAvailableProducts: "%{{OtherAvailableProducts}}"
};



//Service
const Service = {
	ServiceName: "%{{ServiceName}}",
	ServiceStatus: "%{{ServiceStatus}}",
	ServiceSuggestion: "%{{ServiceSuggestion}}",
	OtherAvailableServices :"%{{OtherAvailableServices}}"
};

/*=====  End of bot variables  ======*/

const matchedKeysIn = (message, collection)=>{
	return Object.keys(collection).filter(elem => message.indexOf(collection[elem][0])>=0);
};

const replaceVariablesInMessage = (message, collection, coreData)=>{
	return matchedKeysIn(message, collection).reduce((accumulator, currentValue)=>{
		return accumulator.replace(collection[currentValue][0], coreData[ collection[currentValue][1] ]);
	}, message);
};



const getFbMessageSubscriberFormatted = (message, subscriberInfo)=>{
	return new Promise((resolve, reject)=>{
		resolve( replaceVariablesInMessage(message, FbMessageSubscriber, subscriberInfo) );
	});
};

const getCustomerFormatted = (subscriberInfo, message)=>{
	CustomerController.getInfoUsingPage(subscriberInfo.page, (error, customerInfo)=>{
		if(error){
			callback(error, null);
		}else{
			callback(null, customerInfo);
		}
	});
};

const getBusinessFormatted = (subscriberInfo, message)=>{
	BusinessController.getInfoUsingPage(subscriberInfo.page, (error, businessInfo)=>{
		if(error){
			callback(error, null);
		}else{
			callback(null, businessInfo);
		}
	});
};

const getProductFormatted = (subscriberInfo, message)=>{
	ProductController.getInfoUsingPage(subscriberInfo.page, (error, productInfo)=>{
		if(error){
			callback(error, null);
		}else{
			callback(null, productInfo);
		}
	});
};

const getServiceFormatted = (subscriberInfo, message)=>{
	ServiceController.getInfoUsingPage(subscriberInfo.page, (error, serviceInfo)=>{
		if(error){
			callback(error, null);
		}else{
			callback(null, serviceInfo);
		}
	});
};

const getOrderFormatted = (subscriberInfo, message)=>{
	OrderController.getInfoUsingPage(subscriberInfo.page, (error, orderInfo)=>{
		if(error){
			callback(error, null);
		}else{
			callback(null, orderInfo);
		}
	});
};

const getInvoiceFormatted = (subscriberInfo, message)=>{
	InvoiceController.getInfoUsingPage(subscriberInfo.page, (error, invoiceInfo)=>{
		if(error){
			callback(error, null);
		}else{
			callback(null, invoiceInfo);
		}
	});
};



const checkVariablesAndFormat = (message, subscriberInfo)=>{
	return getFbMessageSubscriberFormatted(message, subscriberInfo).then((result)=>{
		return getFbMessageSubscriberFormatted(result, subscriberInfo);
	});









	// if(foundInFbMessageSubscriber){
	// 	message = getFbMessageSubscriberFormatted(subscriberInfo, message);
	// }

	// let foundInCustomer = variableExistsIn(Customer);
	// if(foundInCustomer){
	// 	message = getCustomerFormatted(subscriberInfo, message);
	// }
	// let foundInBusiness = variableExistsIn(Business);
	// if(foundInBusiness){
	// 	message = getBusinessFormatted(subscriberInfo, message);
	// }
	// let foundInOrder = variableExistsIn(Order);
	// if(foundInOrder){
	// 	message = getOrderFormatted(subscriberInfo, message);
	// }
	// let foundInInvoice = variableExistsIn(Invoice);
	// if(foundInInvoice){
	// 	message = getInvoiceFormatted(subscriberInfo, message);
	// }
	// let foundInProduct = variableExistsIn(Product);
	// if(foundInProduct){
	// 	message = getProductFormatted(subscriberInfo, message);
	// }
	// let foundInService = variableExistsIn(Service);
	// if(foundInService){
	// 	message = getServiceFormatted(subscriberInfo, message);
	// }
	// return message;

	// callback(null, message)
	// return message;
};


const formatTemplateMessage = module.exports.formatTemplateMessage =  (message, subscriberInfo)=>{
	return new Promise((resolve, reject)=>{
		if(message){
			checkVariablesAndFormat(message, subscriberInfo).then((result)=>{
				resolve(result);
			});
		}
		else resolve(message);
	});

};