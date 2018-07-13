/*=======================================
=            Page Categories            =
=======================================*/
//Food Business
const FoodBusinessCategory = "FoodBusinessCategory";
const FoodBusiness = {
	Restaurant : "restaurant",
    FastFoodRestaurant : "fast food restaurant",
    FoodAndBeverage : "food & beverage",
    FoodStand : "food stand",
	FoodTruck : "food truck"
};



//Hotel Business
const HotelBusinessCategory = "HotelBusinessCategory";
const HotelBusiness = {
	Hotel : "hotel",
 	HotelAndLodging : "hotel & lodging",
 	HotelResort : "hotel resort",
 	Motel : "motel",
 	Inn : "inn",
 	Hostel : "hostel",
};

//Travel & Transportation Business
const TravelBusinessCategory = "TravelBusinessCategory";
const TravelBusiness = {
	TravelAndTransportation : 'travel & transportation',
	TravelAgency : 'travel agency',
	transportationService : 'transportation service',
	TravelCompany : 'travel company'
};

//Retail Business
const RetailBusinessCategory = "RetailBusinessCategory";
const RetailBusiness = {
	Retail : 'retail company',
	ShoppingAndRetail : 'shopping & retail'
};

/*=====  End of Page Categories  ======*/
const getFoodBusinessPersistentMenu = ()=>{
	return {
		  "persistent_menu":[
		    {
		      "locale":"default",
		      "composer_input_disabled": false,
		      "call_to_actions":[
		        {
		          "title":"Food Menu",
		          "type":"nested",
		          "call_to_actions":[
		            {
		              "title":"Main Dish",
		              "type":"postback",
		              "payload":"MAIN_DISH"
		            },
		            {
		              "title":"Deserts",
		              "type":"postback",
		              "payload":"DESERTS"
		            },
		            {
		              "title":"Drinks & Beverages",
		              "type":"postback",
		              "payload":"DRINKS_AND_BEVERAGES"
		            }
		          ]
		        },
		        {
		          "title":"Contact Us",
		          "type":"nested",
		          "call_to_actions":[
		            {
		              "title":"Our Address",
		              "type":"postback",
		              "payload":"ADDRESS"
		            },
		            {
		              "title":"Contact Info",
		              "type":"postback",
		              "payload":"CONTACT_INFO"
		            }
		          ]
		        }
		      ]
		    }
		  ]
		};
};

const getHotelBusinessPersistentMenu = ()=>{
	return {
		  "persistent_menu":[
		    {
		      "locale":"default",
		      "composer_input_disabled": false,
		      "call_to_actions":[
		        {
		          "title":"Our Services",
		          "type":"nested",
		          "call_to_actions":[
		            {
		              "title":"Rooms",
		              "type":"postback",
		              "payload":"MAIN_DISH"
		            },
		            {
		              "title" : "Bar",
		              "type" : "postback",
		              "payload" : "BAR"
		            },
		            {
		              "title":"Restaurant",
		              "type":"postback",
		              "payload":"RESTAURANT"
		            }
		          ]
		        },
		        {
		          "title":"Contact Us",
		          "type":"nested",
		          "call_to_actions":[
		            {
		              "title":"Our Address",
		              "type":"postback",
		              "payload":"ADDRESS"
		            },
		            {
		              "title":"Contact Info",
		              "type":"postback",
		              "payload":"CONTACT_INFO"
		            }
		          ]
		        }
		      ]
		    }
		  ]
		};
};

const getTravelBusinessPersistentMenu = ()=>{
	return {
		  "persistent_menu":[
		    {
		      "locale":"default",
		      "composer_input_disabled": false,
		      "call_to_actions":[
		        {
		          "title":"Our Services",
		          "type":"nested",
		          "call_to_actions":[
		            {
		              "title":"Rooms",
		              "type":"postback",
		              "payload":"MAIN_DISH"
		            },
		            {
		              "title" : "Bar",
		              "type" : "postback",
		              "payload" : "BAR"
		            },
		            {
		              "title":"Restaurant",
		              "type":"postback",
		              "payload":"RESTAURANT"
		            }
		          ]
		        },
		        {
		          "title":"Contact Us",
		          "type":"nested",
		          "call_to_actions":[
		            {
		              "title":"Our Address",
		              "type":"postback",
		              "payload":"ADDRESS"
		            },
		            {
		              "title":"Contact Info",
		              "type":"postback",
		              "payload":"CONTACT_INFO"
		            }
		          ]
		        }
		      ]
		    }
		  ]
		};
};

const getRetailBusinessPersistentMenu = ()=>{
	return {
		  "persistent_menu":[
		    {
		      "locale":"default",
		      "composer_input_disabled": false,
		      "call_to_actions":[
		        {
		          "title":"Products",
		          "type":"nested",
		          "call_to_actions":[
		            {
		              "title":"Clothing",
		              "type":"postback",
		              "payload":"CLOTHING"
		            },
		            {
		              "title" : "Electronics",
		              "type" : "postback",
		              "payload" : "BAR"
		            },
		            {
		              "title":"Household",
		              "type":"postback",
		              "payload":"HOUSEHOLD"
		            }
		          ]
		        },
		        {
		          "title":"Contact Us",
		          "type":"nested",
		          "call_to_actions":[
		            {
		              "title":"Our Address",
		              "type":"postback",
		              "payload":"ADDRESS"
		            },
		            {
		              "title":"Contact Info",
		              "type":"postback",
		              "payload":"CONTACT_INFO"
		            }
		          ]
		        }
		      ]
		    }
		  ]
		};
};


const getMenu = (businessCategory)=>{
	switch (businessCategory) {
		case FoodBusinessCategory:
			return getFoodBusinessPersistentMenu();
			break;
		case HotelBusinessCategory:
			return getHotelBusinessPersistentMenu();
			break;
		case TravelBusinessCategory:
			return getTravelBusinessPersistentMenu();
			break;
		case RetailBusinessCategory:
			return getRetailBusinessPersistentMenu();
			break;
		default:
			return null;
			break;
	}
}

const getCategory = (category)=>{
	switch (category.trim().toLowerCase()) {
		case FoodBusiness.Restaurant:
			return FoodBusinessCategory;
			break;
		case FoodBusiness.FastFoodRestaurant:
			return FoodBusinessCategory;
			break;
		case FoodBusiness.FoodAndBeverage:
			return FoodBusinessCategory;
			break;
		case FoodBusiness.FoodStand:
			return FoodBusinessCategory;
			break;
		case FoodBusiness.FoodTruck:
			return FoodBusinessCategory;
			break;
		case HotelBusiness.Hotel:
			return HotelBusinessCategory;
			break;
		case HotelBusiness.HotelAndLodging:
			return HotelBusinessCategory;
			break;
		case HotelBusiness.HotelResort:
			return HotelBusinessCategory;
			break;
		case HotelBusiness.Motel:
			return HotelBusinessCategory;
			break;
		case HotelBusiness.Inn:
			return HotelBusinessCategory;
			break;
		case HotelBusiness.Hostel:
			return HotelBusinessCategory;
			break;
		case TravelBusiness.TravelAndTransportation:
			return TravelBusinessCategory;
			break;
		case TravelBusiness.Transportation:
			return TravelBusinessCategory;
			break;
		case TravelBusiness.TravelBusiness:
			return TravelBusinessCategory;
			break;
		case TravelBusiness.TravelCompany:
			return TravelBusinessCategory;
			break;
		case RetailBusiness.Retail:
			return RetailBusinessCategory;
			break;
		case RetailBusiness.ShoppingAndRetail:
			return RetailBusinessCategory;
			break;
		default:
			return null;
			break;
	}


}

module.exports.getPersistentMenu = (category)=>{
	const businessCategory = getCategory(category);
	if(businessCategory) return getMenu(businessCategory);
	else return null;
};



