import { Component, OnInit, EventEmitter } from '@angular/core';
import { MyBusinessService } from '../../services/my-business.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
		public tableColumns : string[] = ["name","bought times","total purchased amount"];
		public tableDataEvent : EventEmitter<any> = new EventEmitter<any>();
		public customerList : any[] = [];
	  constructor(
	  	private myBusinessService : MyBusinessService
	  ) { }

	  ngOnInit() {
	  	this.getCustomerList();
	  }

	  setTableData(){
	    let tableList = [];
	    for(let i in this.customerList){
	      tableList.push(this.getTableFormattedService(this.customerList[i]));
	    }
	  	this.tableDataEvent.emit(tableList);
	  }

	  getTableFormattedService(data : any):any{
	  	return {
	  		"_id" : data._id,
	  		"name" : data.name,
	  		"bought times" : data.boughtTimes,
	  		"total purchased amount" : data.totalPurchasedAmount
	  	};
	  }

	  getCustomerList(){
	  	this.myBusinessService.getCustomerList().subscribe((response)=>{
	  		console.log(response);
	  		this.customerList = response.data;
	  		this.setTableData();
	  	},(errorResponse)=>{
	  		console.log(errorResponse);
	  	});
	  };
}
