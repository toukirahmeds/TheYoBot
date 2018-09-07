import { Component, OnInit, EventEmitter } from '@angular/core';
import { BSService } from '../../services/businessService.service';



@Component({
  selector: 'app-business-service-table',
  templateUrl: './business-service-table.component.html',
  styleUrls: ['./business-service-table.component.scss']
})
export class BusinessServiceTableComponent implements OnInit {
	public tableColumns : string[] = ["name", "type", "price", "status"];
 	public tableDataEvent : EventEmitter<any> = new EventEmitter<any>();
  	private serviceList : any[] = [];
  constructor(
  	private bsService : BSService
  ) { }

  ngOnInit() {
  };

  setTableData(data : any){
  	this.tableDataEvent.emit(data);
  }

  getFormattedService(data : any):any{
  	return {
  		_id : data._id,
  		name : data.name,
  		type : data.type,
  		price : data.price,
  		status : data.status
  	};
  }

  getBusinessServiceList(){
  	this.serviceList = [];
  	this.bsService.getServiceList().subscribe((response : any)=>{
  		console.log(response);
  		for(let i in response["data"]){
  			this.serviceList.push(this.getFormattedService(response["data"][i]));
  		}//for loop ends here
  		this.setTableData(this.serviceList);
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  };

  createBusinessService(data : any, callback : any){
  	this.bsService.createService(data).subscribe((response)=>{
  		console.log(response);
  		this.serviceList.push(this.getFormattedService(response["data"]));
  		this.setTableData(this.serviceList);
  		callback(true);
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  };


  updateBusinessService(data : any){
  	this.bsService.updateService(data).subscribe((response)=>{
  		console.log(response);
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  };


  deleteBusinessService(serviceId : string){
  	this.bsService.deleteService(serviceId).subscribe((response)=>{
  		console.log(response);
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  };


  openBusinessServiceModal(){

  }

}
