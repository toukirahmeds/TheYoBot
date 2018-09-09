import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyBusiness } from '../../models/myBusiness.model';
import { MyBusinessService } from '../../services/my-business.service';


@Component({
  selector: 'app-my-business-profile',
  templateUrl: './my-business-profile.component.html',
  styleUrls: ['./my-business-profile.component.scss']
})
export class MyBusinessProfileComponent implements OnInit {
	public myBusinessForm : FormGroup;

  public myBusiness : MyBusiness = new MyBusiness();

  constructor(
  	private formBuilder : FormBuilder,
  	private myBusinessService : MyBusinessService
  ) { }

  ngOnInit() {
  	this.initMyBusinessForm();
    this.getMyBusinessInfo();
  }

  getMyBusinessInfo(){
    this.myBusinessService.getMyBusinessInfo().subscribe((response : any)=>{
      for(let i in response.data[0]){

        this.myBusiness[i] = response.data[0][i];
      }
      this.initMyBusinessForm(this.myBusiness);
    },(errorResponse)=>{
      console.log(errorResponse);
    });

  }

 

  initMyBusinessForm(form : MyBusiness = new MyBusiness()){
  	this.myBusinessForm = this.formBuilder.group({
      "_id" : [form._id],
      "page" : [form.page],
      "user" : [form.user],
  		"name" : [form.name],
  		"contactInfo.primaryPhone" : [form["contactInfo"]["primaryPhone"]],
  		"contactInfo.primaryEmail" : [form["contactInfo"]["primaryEmail"]],
  		"contactInfo.primaryAddress.street" : [form["contactInfo"]["primaryAddress"]["street"]],
  		"contactInfo.primaryAddress.postalCode" : [form["contactInfo"]["primaryAddress"]["postalCode"]],
  		"contactInfo.primaryAddress.city" : [form["contactInfo"]["primaryAddress"]["city"]],
  		"contactInfo.primaryAddress.state" : [form["contactInfo"]["primaryAddress"]["state"]],
  		"contactInfo.primaryAddress.country" : [form["contactInfo"]["primaryAddress"]["country"]],
  		"category" : [form.category],
  		"businessLocations" : [form.businessLocations],
  		"paymentMethods" : [form.paymentMethods]
  	});
  }

  updateMyBusinessInfo(){
    // console.log(this.myBusinessForm.value);
    let updatedMyBusinessInfo = {
          "_id" : this.myBusinessForm.value['_id'],
          "page" : this.myBusinessForm.value['page'],
          "user" : this.myBusinessForm.value['user'],
          "name" : this.myBusinessForm.value['name'],
          "contactInfo" : {
            "primaryPhone" : this.myBusinessForm.value['contactInfo.primaryPhone'],
            "primaryEmail" : this.myBusinessForm.value['contactInfo.primaryEmail'],
            "primaryAddress" : {
              "street" : this.myBusinessForm.value['contactInfo.primaryAddress.street'],
              "postalCode" : this.myBusinessForm.value['contactInfo.primaryAddress.postalCode'],
              "city" : this.myBusinessForm.value['contactInfo.primaryAddress.city'],
              "state" : this.myBusinessForm.value['contactInfo.primaryAddress.state'],
              "country" : this.myBusinessForm.value['contactInfo.primaryAddress.country'],
            }
          },
          "category" : this.myBusinessForm.value['category'],
          "businessLocations" : this.myBusinessForm.value['businessLocations'],
          "paymentMethods" : this.myBusinessForm.value['paymentMethods']
    };
    
    console.log(updatedMyBusinessInfo);
    this.myBusinessService.updateMyBusinessInfo(updatedMyBusinessInfo).subscribe((response)=>{
      console.log(response);
    },(errorResponse)=>{
      console.log(errorResponse);
    });
  }

}
