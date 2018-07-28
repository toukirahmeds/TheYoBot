export class Address {
	public street : string = "";
	public postalCode : string = "";
	public city : string = "";
	public state : string = "";
	public country : string = "";
	constructor(){}
}

export class ContactInfo {
	public primaryPhone : string = "";
	public primaryEmail : string = "";
	public primaryAddress : Address = new Address();
	

	constructor(){}
}

export class MyBusiness{
	public name : string = "";
	public contactInfo : ContactInfo = new ContactInfo();
	public category : string = "";
	public businessLocations : string[] = [];
	public paymentMethods : string[] = [];
	public page : string = "";
	public _id : string = "";
	public user : string = "";
	constructor(){}
}