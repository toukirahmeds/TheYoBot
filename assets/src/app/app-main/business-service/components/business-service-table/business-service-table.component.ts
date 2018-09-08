import { Component, OnInit, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { BSService } from '../../services/businessService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '../../../shared-module';
import * as _ from 'lodash';


@Component({
  selector: 'app-business-service-table',
  templateUrl: './business-service-table.component.html',
  styleUrls: ['./business-service-table.component.scss']
})
export class BusinessServiceTableComponent implements OnInit {
	@ViewChild('serviceFormTemplate') public serviceFormTemplate : TemplateRef<any>;
  public tableColumns : string[] = ["name", "type", "price", "status"];
 	public tableDataEvent : EventEmitter<any> = new EventEmitter<any>();
  private serviceList : any[] = [];
  public serviceForm : FormGroup;
  constructor(
  	private bsService : BSService,
    private formBuilder : FormBuilder,
    private dialogService  : DialogService
  ) { }

  ngOnInit() {
    this.getBusinessServiceList();
  };

  initServiceForm(data : any){
    this.serviceForm = this.formBuilder.group({
      "_id" : [data["_id"]?data["_id"] : ""],
      "name" : [data["name"]?data["name"]: "",[Validators.required]],
      "type" : [data["type"]?data["type"] : "",[Validators.required]],
      // "serviceTime.startTime" : [data["serviceTime"]["startTime"]?data["serviceTime"]["startTime"]:""],
      // "serviceTime.endTime" : [data["serviceTime"]["endTime"]?data["serviceTime"]["endTime"]:""],
      "price.currency" : [data["price"] && data["price"]["currency"]?data["price"]["currency"]:"USD",[Validators.required]],
      "price.amount" : [data["price"] && data["price"]["amount"]?data["price"]["amount"]:0,[Validators.required]],
      "status" : [data["status"]?data["status"]:""]
    });
  }  

  setTableData(){
    let tableList = [];
    for(let i in this.serviceList){
      tableList.push(this.getTableFormattedService(this.serviceList[i]));
    }
  	this.tableDataEvent.emit(tableList);
  }

  getTableFormattedService(data : any):any{
  	return {
  		_id : data._id,
  		name : data.name,
  		type : data.type,
  		price : data["price"]["currency"] + " " +  data["price"]["amount"],
  		status : data.status
  	};
  }

  getFormattedServiceFromForm(data : any){
    return {
      _id : data._id,
      name : data.name,
      type : data.type,
      price : {
        "currency" : data["price.currency"],
        "amount" : data["price.amount"]
      },
      status : data.status
    };
  }

  getBusinessServiceList(){
  	this.serviceList = [];
  	this.bsService.getServiceList().subscribe((response : any)=>{
  		console.log(response);
  		for(let i in response["data"]){
  			this.serviceList.push(response["data"][i]);
  		}//for loop ends here
  		this.setTableData();
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  };

  getBusinessService(serviceId : string, callback : any){
    this.bsService.getService(serviceId).subscribe((response)=>{
      callback(response.data);
    },(errorResponse)=>{
      callback(null);
    });
  };

  createBusinessService(data : any, callback : any){
  	this.bsService.createService(data).subscribe((response)=>{
  		console.log(response);
  		this.serviceList.push(response["data"]);
  		this.setTableData();
  		callback(true);
  	},(errorResponse)=>{
  		console.log(errorResponse);
      callback(false);
  	});
  };


  updateBusinessService(data : any, callback:any){
  	this.bsService.updateService(data).subscribe((response)=>{
  		console.log(response);

      this.serviceList[this.getIndexOfServiceList(data._id)] = this.getFormattedServiceFromForm(data);
      this.setTableData();
      callback(true);
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	  callback(false);
    });
  };


  deleteBusinessService(serviceId : string){
  	this.bsService.deleteService(serviceId).subscribe((response)=>{
  		console.log(response);
      this.serviceList.splice(this.getIndexOfServiceList(serviceId),1);
      this.setTableData();
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  };

  getIndexOfServiceList(id: String){
    let indexOfService = _.findIndex(this.serviceList, (elem)=>{
      return id.toString() === elem._id.toString();
    });
    return indexOfService;
  }

  getObjectById(id : string){
    let obj = _.find(this.serviceList, (elem)=>{
      return elem._id.toString() === id.toString();
    });
    return obj;
  }


  openBusinessServiceModal(type : string, data? : any){
    if(type == "create"){
      this.initServiceForm({});
    }else if(type == "edit"){
      this.initServiceForm(this.getObjectById(data._id));
    }




    let confirm = (cb)=>{
      if(type == "create"){
        delete this.serviceForm.value["_id"];
        this.createBusinessService(this.serviceForm.value,(result)=>{
          if(result) cb(true);
          else cb(false);
        });
      }else if(type == "edit"){
        this.updateBusinessService(this.serviceForm.value, (result)=>{
          if(result) cb(true);
          else cb(false);
        });
      }
      
    };
    this.dialogService.openModal({
      width : '750px',
      data : {
        body : {
          template : this.serviceFormTemplate
        },
        callback : {
          confirm : confirm
        }
      }
    });
  }

}
