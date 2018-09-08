import { BackendUrl } from "./configs";

/*=====================================================
=            Declaration of backend parent routes            =
=====================================================*/
const UserUrl = BackendUrl + "/user/";
const AuthenticationUrl = BackendUrl + "/authentication/";
const TemplateUrl = BackendUrl + "/template/";
const AutomationUrl = BackendUrl + "/automation/";
const PageUrl = BackendUrl + "/page/";
const MembershipUrl = BackendUrl + "/membership/";
const BroadcastUrl = BackendUrl + "/broadcast/";
const PaymentUrl = BackendUrl + "/payment/";
const MyBusinessUrl = BackendUrl + "/my-business/";
const ProductUrl = BackendUrl + "/product/";
const ServiceUrl = BackendUrl + "/service/";
const InvoiceUrl = BackendUrl + "/invoice/";
const OrderUrl = BackendUrl + "/order/";
const FbMessageSubscriberUrl = BackendUrl + "/fb-message-subscriber/";
const CustomerUrl = BackendUrl + "/customer/";
/*=====  End of Declaration of backend parent routes  ======*/


export const UserBERoutes = {
				"details" : UserUrl + "details/",
				"list" : UserUrl + "list",
				"create" : UserUrl + "create",
				"update" : UserUrl + "update",
				"delete" : UserUrl + "delete"
};
export const AuthBERoutes = {
			"authenticate" : AuthenticationUrl + "authenticate/",
			"authorize" : AuthenticationUrl + "authorize",
			"logout" : AuthenticationUrl + "logout"
};

export const TemplateBERoutes =  {
	"details" : TemplateUrl + "details/",
	"list" : TemplateUrl + "list",
	"create" : TemplateUrl + "create",
	"update" : TemplateUrl + "update",
	"delete" : TemplateUrl + "delete"
};

export const AutomationBERoutes =  {
	"details" : AutomationUrl + "details/",
	"list" : AutomationUrl + "list",
	"create" : AutomationUrl + "create",
	"update" : AutomationUrl + "update",
	"delete" : AutomationUrl + "delete"
};

export const PageBERoutes = {
	"details" : PageUrl + "details/",
	"list" : PageUrl + "list",
	"create" : PageUrl + "create",
	"update" : PageUrl + "update",
	"delete" : PageUrl + "delete" 
};

export const MembershipBERoutes = {
	"details" : MembershipUrl + "details/",
	"list" : MembershipUrl + "list",
	"create" : MembershipUrl + "create",
	"update" : MembershipUrl + "update",
	"delete" : MembershipUrl + "delete" 
};

export const BroadcastBERoutes = {
	"details" : BroadcastUrl + "details/",
	"list" : BroadcastUrl + "list",
	"create" : BroadcastUrl + "create",
	"update" : BroadcastUrl + "update",
	"delete" : BroadcastUrl + "delete" 
};

export const PaymentBERoutes = {
	"details" : PaymentUrl + "details/",
	"list" : PaymentUrl + "list",
	"create" : PaymentUrl + "create",
	"update" : PaymentUrl + "update",
	"delete" : PaymentUrl + "delete" 
};


export const MyBusinessBERoutes = {
	"details" : MyBusinessUrl + "details",
	"list" : MyBusinessUrl + "list",
	"create" : MyBusinessUrl + "create",
	"update" : MyBusinessUrl + "update",
	"delete" : MyBusinessUrl + "delete" 
};

export const ProductBERoutes = {
	"details" : ProductUrl + "details",
	"list" : ProductUrl + "list",
	"create" : ProductUrl + "create",
	"update" : ProductUrl + "update",
	"delete" : ProductUrl + "delete" 
};


export const ServiceBERoutes = {
	"details" : ServiceUrl + "details",
	"list" : ServiceUrl + "list",
	"create" : ServiceUrl + "create",
	"update" : ServiceUrl + "update",
	"delete" : ServiceUrl + "delete" 
};

export const InvoiceBERoutes = {
	"details" : InvoiceUrl + "details",
	"list" : InvoiceUrl + "list",
	"create" : InvoiceUrl + "create",
	"update" : InvoiceUrl + "update",
	"delete" : InvoiceUrl + "delete" 
};

export const OrderBERoutes = {
	"details" : OrderUrl + "details",
	"list" : OrderUrl + "list",
	"create" : OrderUrl + "create",
	"update" : OrderUrl + "update",
	"delete" : OrderUrl + "delete" 
};

export const FbMessageSubscriberBERoutes = {
	"details" : FbMessageSubscriberUrl + "details",
	"list" : FbMessageSubscriberUrl + "list",
	"create" : FbMessageSubscriberUrl + "create",
	"update" : FbMessageSubscriberUrl + "update",
	"delete" : FbMessageSubscriberUrl + "delete" 
};

export const CustomerBERoutes = {
	"details" : CustomerUrl + "details",
	"list" : CustomerUrl + "list",
	"create" : CustomerUrl + "create",
	"update" : CustomerUrl + "update",
	"delete" : CustomerUrl + "delete" 
};