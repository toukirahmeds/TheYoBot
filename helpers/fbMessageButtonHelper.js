
/*====================================
=            Button Types            =
====================================*/
const PaymentButton = "payment";
const PhoneNumberButton = "phone_number";
const GamePlayButton = "game_play";
const AccountLinkButton = "account_link";
const AccountUnlinkButton = "account_unlink";
const PostBackButton = "postback";
const ElementShareButton = "element_share";
const WebUrlButton = "web_url";
/*=====  End of Button Types  ======*/


/*=====================================
=            Payment Types            =
=====================================*/
const PaymentFixedAmount = "FIXED_AMOUNT";
const PaymentFlexibleAmount = "FLEXIBLE_AMOUNT";


/*=====  End of Payment Types  ======*/


module.exports.getMessageButton = (type, template)=>{
	switch(type){
		case PaymentButton : 
			return getPaymentButton(template);
		case PhoneNumberButton : 
			return getPhoneNumberButton(template);
		case GamePlayButton : 
			return getGamePlayButton(template);
		case AccountLinkButton :
			return getAccountLinkButton(template);
		case AccountUnlinkButton :
			return getAccountUnlinkButton(template);
		case PostBackButton :
			return getPostBackButton(template);
		case ElementShareButton :
			return getElementShareButton(template);
		case WebUrlButton : 
			return getWebUrlButton(template);
		default:
			return {};
	}
};

const getPaymentButton = module.exports.getPaymentButton = (template)=>{
	let paymentButton = {
		"type" : PaymentButton,
		"title" : template.title,
		"payload" : template.payload,
		"payment_summary" : {
			"currency" : template.payment.currency,
			"payment_type" : template.payment.paymentType,
			"is_test_payment" : template.payment.isTestPayment,
			"merchant_name" : template.payment.merchantName,
			"requested_user_info" : [
				template.payment.requestedUserInfo.shippingAddress,
				template.payment.requestedUserInfo.contactName,
				template.payment.requestedUserInfo.contactPhone,
				template.payment.requestedUserInfo.contactEmail
			]
		},
		"price_list" : []
	};

	for(let i in template.priceList){
		paymentButton['price_list'].push({
			"label" : template.priceList[i].label,
			"amount" : template.priceList[i].amount
		});
	}


	return paymentButton;
};

const getPhoneNumberButton = module.exports.getPhoneNumberButton = (template)=>{
	return {
		"type" : PhoneNumberButton,
		"title" : template.title,
		"payload" : template.phoneNumber
	}
};
const getWebUrlButton = module.exports.getWebUrlButton = (template)=>{
	return {
		"type" : WebUrlButton,
		"url" : template.url,
		"title" : template.title,
		"webview_height_ratio" : template.WebViewHeightRatio? template.WebViewHeightRatio : "tall"/*,
		"messenger_extensions" : template.messengerExtension? template.messengerExtension : true,
		"fallback_url" : template.fallBackUrl*/
	};
};


const getGamePlayButton = module.exports.getGamePlayButton = (template)=>{
	return {
		"type" : GamePlayButton,
		"title" : template.title,
		"payload" : template.payload,
		"game_metadata" : {
			"player_id" : template.gameMetaData.playerId,
			"context_id" : template.gameMetaData.contextId
		}
	};
};


const getAccountLinkButton = module.exports.getAccountLinkButton = (template)=>{
	return {
		"type" : AccountLinkButton,
		"url" : template.url
	};
};

const getAccountUnlinkButton = module.exports.getAccountUnlinkButton = (template)=>{
	return {
		"type" : AccountUnlinkButton
	};
};

const getPostBackButton = module.exports.getPostBackButton = (template)=>{
	return {
		"type" : PostBackButton,
		"title" : template.title,
		"payload" : template.payload
	};	
};


const getElementShareButton = module.exports.getElementShareButton = (template)=>{
	let elementShareButton = {
		"type" : ElementShareButton,
		"share_contents" : {
			"attachment" : {
				"type" : "template",
				"payload" : template
			}
		}
	};

	return elementShareButton;
};

