/*=============================================================
=            Declaration of frontend parent routes            =
=============================================================*/
export const FrontendRoutes = {
	AuthFEUrl : "",
	PageFEUrl : "page",
	MessengerConversationFEUrl : "messenger-conversation",
	FBPostConversationFEUrl : "fb-post",
	MyProfileFEUrl : "my-profile",
	AnalyticsFEUrl : "analytics",
	BroadcastFEUrl : "broadcast",
	PaymentFEUrl : "payment",
	MyBusinessFEUrl : "my-business",
	ProductFEUrl : "product",
	OrderFEUrl : "order",
	InvoiceFEUrl : "invoice",
	ServiceFEUrl : "service"
};
/*=====  End of Declaration of frontend parent routes  ======*/


/*======================================================
=            Declaration of frontend routes            =
======================================================*/

export const AuthFERoutes = {
	"signIn" : "",
	"signUp" : "sign-up",
	"forgotPassword" : "forgot-password",
	"recoverPassword" : "recover-password"
};

export const PageFERoutes = {
	"pageList" : "page-list",
	"pageConnect" : "page-connect",
	"pageCreate" : "page-create"
};

export const MessengerConversationFERoutes = {
	"messengerConversationFlow" : "conversation-flow",
	"persistentMenu" : "persistent-menu"
};

export const FbPostConversationFERoutes = {
	"postConversationFlow" : "conversation-flow",
	"postList" : "post-list"
};

export const MyProfileFERoutes = {
	"myProfileInfo" : "profile"
};

export const BroadcastFERoutes = {
	"broadcastFlow" : "broadcast-flow"
};
	
export const AnalyticsFERoutes = {
	"dailyVisitors" : "daily-visitors",
	"monthlyVisitors" : "monthly-visitors",
	"monthlySalesChart" : "monthly-sales-chart",
	"monthlyRevenueChart" : "monthly-revenue-chart"
};

export const MyBusinessFERoutes = {
	"profile" : "profile",
	"fbPageSubscribers" : "fb-page-subscribers",
	"customers" : "customers",
	"serviceLocations" : "service-locations"
};

export const ProductFERoutes = {
	"productList" : "product-list",
	"topProducts" : "top-products"
};

export const ServiceFERoutes = {
	"serviceList" : "service-list"
};

export const OrderFERoutes = {
	"orderList" : "order-list"
};

export const InvoiceFERoutes = {
	"invoiceList" : "invoice-list"
};
