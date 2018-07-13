const FbMessageSubscriber= module.exports.FbMessageSubscriber = {
	FirstName : "%{{FirstName}}",
 	LastName : "%{{LastName}}",
 	FullName : "%{{FullName}}",
 	Salutation : "%{{Salutation}}",
 	Honorific : "%{{Honorific}}",
 	Gender : "%{{Gender}}",
 	CurrentTime : "%{{CurrentTime}}",
 	LocationFullAddress : "%{{LocationFullAddress}}",
 	ProfilePicture : "%{{ProfilePicture}}"
};


//Customer
const Customer = module.exports.Customer = {
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
const Business = module.exports.Business = {
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
const Order = module.exports.Order = {
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
const Invoice = module.exports.Invoice = {
	InvoiceTotalAmount  :"%{{InvoiceTotalAmount}}",
	InvoiceCurrency : "%{{InvoiceCurrency}}",
	LastInvoiceTotalAmount  :"%{{LastInvoiceTotalAmount}}",
	LastInvoiceDate : "%{{LastInvoiceDate}}"
};





//Product
const Product = module.exports.Product = {
	ProductName :"%{{ProductName}}",
	ProductStockStatus :"%{{ProductStockStatus}}",
	OtherAvailableProducts: "%{{OtherAvailableProducts}}"
};



//Service
const Service = module.exports.Service = {
	ServiceName: "%{{ServiceName}}",
	ServiceStatus: "%{{ServiceStatus}}",
	ServiceSuggestion: "%{{ServiceSuggestion}}",
	ServiceTotalNumberAvailable : "%{{ServiceTotalNumberAvailable}}",
	ServiceNextAvailableTime : "%{{ServiceNextAvailableTime}}",
	OtherAvailableServices :"%{{OtherAvailableServices}}"
};