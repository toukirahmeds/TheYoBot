

/*=========================================
=            Import of helpers            =
=========================================*/
const fbMessageButtonHelper = require("./fbMessageButtonHelper");
const fbMessageElementHelper = require("./fbMessageElementHelper");

/*=====  End of Import of helpers  ======*/


/*==============================================
=            Message Template Types            =
==============================================*/
const ButtonTemplate = "button";
const MediaTemplate = "media";
const GenericTemplate = "generic";
const ListTemplate = "list";
const OpenGraphTemplate = "open_graph";
const ReceiptTemplate = "receipt";
const AirlineBoardingPassTemplate = "airline_boardingpass";
const AirlineCheckinTemplate = "airline_checkin";
const AirlineItineraryTemplate = "airline_itinerary";
const AirlineUpdateTemplate = "airline_update";
/*=====  End of Message Template Types  ======*/





module.exports.getMessageTemplate = (type, template)=>{
	switch(type){
		case ButtonTemplate:
			return getButtonTemplate(template);
		case MediaTemplate:
			return getMediaTemplate(template);
		case GenericTemplate:
			return getGenericTemplate(template);
		case ListTemplate:
			return getListTemplate(template);
		case OpenGraphTemplate:
			return getOpenGraphTemplate(template);
		case ReceiptTemplate:
			return getReceiptTemplate(template);
		case AirlineBoardingPassTemplate:
			return getAirlineBoardingPassTemplate(template);
		case AirlineCheckinTemplate:
			return getAirlineCheckinTemplate(template);
		case AirlineItineraryTemplate:
			return getAirlineItineraryTemplate(template);
		case AirlineUpdateTemplate:
			return getAirlineUpdateTemplate(template);
		default : 
			return {};
	}
};




module.exports.getButtonTemplate = (template)=>{
	let payload = {
		"template_type" : ButtonTemplate,
		"text" : template.text
	};

	if(template.buttons && template.buttons.length){
		payload['buttons'] = [];
		for(let i in template.buttons){
			payload['buttons'].push(fbMessageButtonHelper.getMessageButton(template.buttons[i].type, template.buttons[i].template));
		}
	}


	return payload;
};



const getMediaTemplate =  module.exports.getMediaTemplate = (template)=>{
	let payload = {
		"template_type" : MediaTemplate,
		"elements" : []
	};

	if(template.properties[0].images && template.properties[0].images.length){
		for(let i in template.properties[0].images){
			payload['elements'].push({
				"media_type" : "image",
				"url" : template.properties[0].images[i]['url']
			});
		}
	}

	if(template.properties[0].videos && template.properties[0].videos.length){
		for(let i in template.properties[0].videos){
			payload['elements'].push({
				"media_type" : "video",
				"url" : template.properties[0].videos[i]['url']
			});
		}
	}

	return payload;

};



const getGenericTemplate = module.exports.getGenericTemplate = (template)=>{
	let payload = {
		"template_type" : GenericTemplate,
		"elements" : []
	};

	for(let i in template.properties){
		payload['elements'].push(fbMessageElementHelper.getPayloadElement(template.properties[i]));
	}

	return payload;
};

const getListTemplate = module.exports.getListTemplate = (template)=>{
	let payload = {
		"template_type" : ListTemplate,
		"top_element_style" : template.topElementStyle? template.topElementStyle : "compact",
		"elements" : []
	};

	for(let i in template.properties){
		payload['elements'].push(fbMessageElementHelper.getPayloadElement(template.properties[i]));
	}

	return payload;
};


const getOpenGraphTemplate = module.exports.getOpenGraphTemplate = (template)=>{
	let payload = {
		"template_type" : OpenGraphTemplate,
		"elements" : []
	};

	for(let i in template.properties){
		payload["elements"].push({
			"url" : template.properties[i].url
		});
		if(template.properties[i].buttons){
			let elementIndex = payload["elements"].length - 1;
			payload["elements"][elementIndex]["buttons"] = [];			
			for(let j in template.properties[i].buttons){
				payload["elements"][elementIndex]["buttons"].push(fbMessageButtonHelper.getMessageButton(template.properties[i].buttons[j].type, template.properties[i].buttons[j].template));
			};
		}
	}

	return payload;
};

const getReceiptTemplate = module.exports.getReceiptTemplate = (template)=>{
	let payload = {
		"template_type" : ReceiptTemplate,
		"recipient_name" : template.recipientName,
		"order_number" : template.orderNumber,
		"currency" : template.currency,
		"payment_method" : template.paymentMethod,
		"order_url" : template.orderUrl,
		"timestamp" : template.timestamp,
		"address" :{
			"street_1" : template.address.street1,
			"street_2" : template.address.street2,
			"city" : template.address.city,
			"postal_code" : template.address.postalCode,
			"state" : template.address.state,
			"country" : template.adderss.country
		}, 
		"summary" : {
			"subtotal" : template.subtotal,
			"shipping_cost" : template.shippingCost,
			"total_tax" : template.totalTax,
			"totalCost" : template.totalCost
		},
		"adjustments" : [],
		"elements" : []
	};

	for(let i in template.adjustments){
		payload['adjustments'].push({
			"name" : template.adjustments[i].name,
			"amount" : template.adjustments[i].amount
		});
	}


	for(let i in template.properties){
		payload['elements'].push(fbMessageElementHelper.getPayloadReceiptElement( template.properties[i]) );
	}



	return payload;
};

const getAirlineBoardingPassTemplate = module.exports.getAirlineBoardingPassTemplate = (template)=>{
	let payload = {
		"template_type" : AirlineBoardingPassTemplate,
		"intro_message" : template.introMessage,
		"locale" : template.locale,
		"boarding_pass" : []
	};

	for(let i in template.boardingPasses){
		payload["boarding_pass"].push(fbMessageElementHelper.getBoardingPass(template.boardingPasses[i]));
	};

	return payload;
};

const getAirlineCheckinTemplate = module.exports.getAirlineCheckinTemplate = (template)=>{
	let payload = {
		"template_type" : AirlineCheckinTemplate,
		"intro_message"	: template.introMessage,
		"locale" : template.locale,
		"pnr_number" : template.pnrNumber,
		"checkin_url" : template.checkinUrl,
		"flight_info" : fbMessageElementHelper.getFlightInfo(template.flightInfo)
	};
	return payload;
};

const getAirlineItineraryTemplate = module.exports.getAirlineItineraryTemplate = (template)=>{
	let payload = {
		"template_type" : AirlineItineraryTemplate,
		"intro_message" : template.introMessage,
		"locale" : template.locale,
		"pnr_number" : template.pnrNumber,
		"passenger_info" : [],
		"flight_info" : [],
		"passenger_segment_info" : [],
		"price_info" : [],
		"base_price" : template.basePrice,
		"tax" : template.tax,
		"total_price" : template.totalPrice,
		"currency" : template.currency
	};

	if(template.passengerInfo && template.passengerInfo.length){
		for(let i in template.passengerInfo){
			payload['passenger_info'].push(fbMessageElementHelper.getPassengerInfo(template.passengerInfo[i]));
		}
	}

	if(template.flightInfo && template.flightInfo.length){
		for(let i in template.flightInfo){
			payload['flight_info'].push(fbMessageElementHelper.getItineraryFlightInfo(template.flightInfo[i]));
		}
	}

	if(template.passengerSegmentInfo && template.passengerSegmentInfo.length){
		for(let i in template.passengerSegmentInfo){
			payload['passenger_segment_info'].push(fbMessageElementHelper.getPassengerSegmentInfo(template.passengerSegmentInfo[i]));
		}
	}

	if(template.priceList && temlate.priceList.length){
		for(let i in template.priceList){
			payload['price_info'].push({
				"title" : template.priceList[i].title,
				"amount" : template.priceList[i].amount,
				"currency" : template.priceList[i].currency
			});
		}
	}

	return payload;
};

const getAirlineUpdateTemplate = module.exports.getAirlineUpdateTemplate = (template)=>{
	let payload = {
		"template_type" : AirlineUpdateTemplate,
		"intro_message" : template.introMessage,
		"update_type" : tempate.updateType,
		"locale" : tempate.locale,
		"pnr_number" : tempate.pnrNumber,
		"update_flight_info" : fbMessageElementHelper.getFlightInfo(template.updatedFlightInfo)
	};

	return payload;
};