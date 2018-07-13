const lodash = require("lodash");

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

};

const getCustomerFormatted = (subscriberInfo, message)=>{};

const getBusinessFormatted = (subscriberInfo, message)=>{

};

const getProductFormatted = (subscriberInfo, message)=>{

};

const getServiceFormatted = (subscriberInfo, message)=>{

};

const getOrderFormatted = (subscriberInfo, message)=>{

};

const getInvoiceFormatted = (subscriberInfo, message)=>{

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