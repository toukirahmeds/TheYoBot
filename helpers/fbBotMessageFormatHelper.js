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
	FirstName : "%{{FirstName}}",
 	LastName : "%{{LastName}}",
 	FullName : "%{{FullName}}",
 	Salutation : "%{{Salutation}}",
 	Gender : "%{{Gender}}",
 	CurrentTime : "%{{CurrentTime}}",
 	LocationFullAddress : "%{{LocationFullAddress}}",
 	ProfilePicture : "%{{ProfilePicture}}"
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


const getFbMessageSubscriberFormatted = (subscriberInfo, message)=>{
	FbMessageSubscriberController.getInfoUsingPage(subscriberInfo.page, (error, fbSubscriberInfo)=>{
		if(error){
			callback(error, null);
		}else{
			callback(null, fbSubscriberInfo);
		}
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

const variableExistsIn = (collectionName)=>{
	let matchedKey;
	if(lodash.find(Object.keys(collectionName), (elemKey)=>{
		matchedKey = elemKey;
		return message.indexOf(FbMessageSubscriber[elemKey])>=0;
	})){
		return {
			"matchedKey" : matchedKey
		};
	}else{
		return null;
	}
};

const checkVariablesAndFormat = (subscriberInfo, message)=>{
	let foundInFbMessageSubscriber = variableExistsIn(FbMessageSubscriber);
	if(foundInFbMessageSubscriber){
		message = getFbMessageSubscriberFormatted(subscriberInfo, message);
	}

	let foundInCustomer = variableExistsIn(Customer);
	if(foundInCustomer){
		message = getCustomerFormatted(subscriberInfo, message);
	}
	let foundInBusiness = variableExistsIn(Business);
	if(foundInBusiness){
		message = getBusinessFormatted(subscriberInfo, message);
	}
	let foundInOrder = variableExistsIn(Order);
	if(foundInOrder){
		message = getOrderFormatted(subscriberInfo, message);
	}
	let foundInInvoice = variableExistsIn(Invoice);
	if(foundInInvoice){
		message = getInvoiceFormatted(subscriberInfo, message);
	}
	let foundInProduct = variableExistsIn(Product);
	if(foundInProduct){
		message = getProductFormatted(subscriberInfo, message);
	}
	let foundInService = variableExistsIn(Service);
	if(foundInService){
		message = getServiceFormatted(subscriberInfo, message);
	}
	return message;
};


const formatTemplateMessage = module.exports.formatTemplateMessage =  (subscriberInfo, message)=>{
	return checkVariablesAndFormat(subscriberInfo, message);
};