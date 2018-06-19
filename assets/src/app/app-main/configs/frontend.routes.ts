/*=============================================================
=            Declaration of frontend parent routes            =
=============================================================*/
export const FrontendRoutes = {
	AuthFEUrl : "",
	PageFEUrl : "page",
	MessengerConversationFEUrl : "messenger-conversation",
	PostConversationFEUrl : "post-conversation",
	MyProfileFEUrl : "my-profile",
	AnalyticsFEUrl : "analytics",
	BroadcastFEUrl : "broadcast",
	PaymentFEUrl : "payment"
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
	"messengerConversationFlow" : "conversation-flow"
};

export const PostConversationFERoutes = {
	"postConversationFlow" : "conversation-flow"
};

export const MyProfileFERoutes = {
	"myProfileInfo" : "profile"
};

export const BroadcastFERoutes = {
	"broadcastFlow" : "broadcast-flow"
};
	
export const AnalyticsFERoutes = {
	"analytics" : ""
};
