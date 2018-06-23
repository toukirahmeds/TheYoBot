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
			"authorize" : AuthenticationUrl + "authorize"
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