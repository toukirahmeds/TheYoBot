/*=========================================
=            Import of helpers            =
=========================================*/
const fbMessageButtonHelper = require("./fbMessageButtonHelper");

/*=====  End of Import of helpers  ======*/

module.exports.getPayloadElement = (templateProperty)=>{
	let element = {};
	if(templateProperty.title){
		element['title'] = templateProperty.title;
	}

	if(templateProperty.subtitle){
		element['subtitle'] = templateProperty.subtitle;
	}

	if(templateProperty.imageUrl){
		element['image_url'] = templateProperty.imageUrl;
	}

	if(templateProperty.buttons && templateProperty.buttons.length){
		element['buttons'] = [];
		for(let j in templateProperty.buttons){
			console.log(templateProperty.buttons[j]);
			element['buttons'].push(fbMessageButtonHelper.getMessageButton(templateProperty.buttons[j].type, templateProperty.buttons[j]));
		}
	}
	return element;
};


module.exports.getPayloadReceiptElement = (templateProperty)=>{
	let element = {};
	if(templateProperty.title){
		element['title'] = templateProperty.title;
	}

	if(templateProperty.subtitle){
		element['subtitle'] = templateProperty.subtitle;
	}

	if(templateProperty.quantity){
		element['quantity'] = templateProperty.quantity;
	}

	if(templateProperty.price){
		element['price'] = templateProperty.price;
	}

	if(templateProperty.currency){
		element['currency'] = templateProperty.currency;
	}

	if(templateProperty.imageUrl){
		element['image_url'] = templateProperty.imageUrl;
	}
	return element;
};


const getFlightInfo = module.exports.getFlightInfo = (templateProperty)=>{
	let flightInfo = {
			"flight_number" : templateProperty.flightNumber,
			"departure_airport" : {
				"airport_code" : templateProperty.departureAirport.airportCode,
				"city" : templateProperty.departureAirport.city,
				"terminal" : templateProperty.departureAirport.terminal,
				"gate" : templateProperty.departureAirport.gate
			},
			"arrival_airport" : {
				"airport_code" : templateProperty.arrivalAirport.airportCode,
				"city" : templateProperty.arrivalAirport.city,
				"terminal" : templateProperty.arrivalAirport.terminal,
				"gate" : templateProperty.arrivalAirport.gate
			},
			"flight_schedule" : {
				"boarding_time" : templateProperty.flightSchedule.boardingTime,
				"departure_time" : templateProperty.flightSchedule.departureTime,
				"arrival_time" : templateProperty.flightSchedule.arrivalTime
			}
	};

	return flightInfo;
};

const getPassengerInfo = module.exports.getPassengerInfo = (templateProperty)=>{
	return {
		"name" : templateProperty.name,
		"ticket_number" : templateProperty.ticketNumber,
		"passenger_id" : templateProperty.passengerId
	};
};

const getItineraryFlightInfo = module.exports.getItineraryFlightInfo = (templateProperty)=>{
	return {
		"connection_id": templateProperty.connectionId,
		"segment_id" : templateProperty.segmentId,
		"flight_number" : templateProperty.flightNumber,
		"aircraft_type" : templateProperty.aircraftType,
		"departure_airport" : {
			"airport_code" : templateProperty.departureAirport.airportCode,
			"city" : templateProperty.departureAirport.city
		},
		"arrival_airport": {
			"airport_code" : templateProperty.arrivalAirport.airportCode,
			"city" : templateProperty.arrivalAirport.city
		},
		"flight_schedule" : {
			"departure_time" : templateProperty.flightSchedule.departureTime,
			"arrival_time" : templateProperty.flightSchedule.arrivalTime
		},
		"travel_class" : templateProperty.travelClass
	};
};


const getPassengerSegmentInfo = module.exports.getPassengerSegmentInfo = (templateProperty)=>{
	let passengerSegmentInfo =  {
		"segment_id" : templateProperty.segmentId,
		"passenger_id" : templateProperty.passengerId,
		"seat" : templateProperty.seat,
		"seat_type" : templateProperty.seatType
	};

	if(templateProperty.productInfo && templateProperty.productInfo.length){
		passengerSegmentInfo['product_info'] = [];
		for(let i in templateProperty.productInfo){
			passengerSegmentInfo['product_info'].push({
				"title" : templateProperty.productInfo[i].title,
				"value" : templateProperty.productInfo[i].value
			});
		}
	}

	return passengerSegmentInfo;
};


module.exports.getBoardingPass = (templateProperty)=>{
	let boardingPass = {};
	if(templateProperty.passengerName){
		boardingPass['passenger_name'] = templateProperty.passengerName;
	}

	if(templateProperty.pnrNumber){
		boardingPass['pnr_number'] = templateProperty.pnrNumber;
	}

	if(templateProperty.seat){
		boardingPass['seat'] = templateProperty.seat;
	}

	if(templateProperty.logoImageUrl){
		boardingPass['logo_image_url'] = templateProperty.logoImageUrl;
	}

	if(templateProperty.headerImageUrl){
		boardingPass['header_image_url'] = templateProperty.headerImageUrl;
	}

	if(templateProperty.qrCode){
		boardingPass['qr_code'] = templateProperty.qrCode;
	}

	if(templateProperty.aboveBarCodeImageUrl){
		boardingPass['above_bar_code_image_url'] = templateProperty.aboveBarCodeImageUrl;
	}

	if(templateProperty.auxiliaryFields && templateProperty.auxiliaryFields.length){
		boardingPass['auxiliary_fields'] = [];
		for(let i in templateProperty.auxiliaryFields){
			boardingPass['auxiliary_fields'].push({
				"label" : templateProperty.auxiliaryFields[i].label,
				"value" : templateProperty.auxiliaryFields[i].value
			});
		}
	}

	if(templateProperty.secondaryFields && templateProperty.secondaryFields.length){
		boardingPass['secondary_fields'] = [];
		for(let i in templateProperty.secondaryFields){
			boardingPass['secondary_fields'].push({
				"label" : templateProperty.secondaryFields[i].label,
				"value" : templateProperty.secondaryFields[i].value
			});
		}
	}

	if(templateProperty.flightInfo){
		boardingPass["flight_info"] = getFlightInfo(templateProperty.flightInfo);
	}

	return boardingPass;
};


