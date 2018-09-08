import { Component, OnInit, EventEmitter } from '@angular/core';
import { MyBusinessService } from '../../services/my-business.service';


@Component({
  selector: 'app-fb-page-subscribers',
  templateUrl: './fb-page-subscribers.component.html',
  styleUrls: ['./fb-page-subscribers.component.scss']
})
export class FbPageSubscribersComponent implements OnInit {
	public tableColumns : string[] = ["name","gender","id","status"];
	public tableDataEvent : EventEmitter<any> = new EventEmitter<any>();
	public fbPageSubscriberList : any[] = [];
  constructor(
  	private myBusinessService : MyBusinessService
  ) { }

  ngOnInit() {
  	this.getFbPageSubscriberList();
  }

  setTableData(){
    let tableList = [];
    for(let i in this.fbPageSubscriberList){
      tableList.push(this.getTableFormattedService(this.fbPageSubscriberList[i]));
    }
  	this.tableDataEvent.emit(tableList);
  }

  getTableFormattedService(data : any):any{
  	return {
  		_id : data._id,
  		name : data.firstName + " " + data.lastName,
  		gender : data.gender,
  		id : data.psid,
  		status : data.blocked === false? "OK":"Blocked"
  	};
  }

  getFbPageSubscriberList(){
  	this.myBusinessService.getFbPageSubscriberList().subscribe((response)=>{
  		console.log(response);
  		this.fbPageSubscriberList = response.data;
  		this.setTableData();
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  };

}
