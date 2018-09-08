const categoryHelper = require("../fbPageCategoryHelper");
const hotel = require("./hotel/hotel");
const food = require("./food");
const travel = require("./travel");
const retail = require("./retail");


module.exports = (businessType, automationList, subscriberInfo, callback)=>{
	switch(categoryHelper.getCategory(businessType)){
		case categoryHelper.FoodBusinessCategory :
		 	food(automationList, subscriberInfo, callback);
			break;
		case categoryHelper.HotelBusinessCategory : 
			hotel(automationList, subscriberInfo, callback);
			break;
		case categoryHelper.TravelBusinessCategory :
			travel(automationList, subscriberInfo, callback);
			break;
		case categoryHelper.RetailBusinessCategory : 
			retail(automationList, subscriberInfo, callback);
			break;
	}
};