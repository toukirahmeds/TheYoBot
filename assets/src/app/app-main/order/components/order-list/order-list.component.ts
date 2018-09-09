import { Component, OnInit, EventEmitter } from '@angular/core';
import { DialogService } from '../../../shared-module';
import { OrderService } from '../../services/order.service';



@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
	public tableColumns : string[] = ["customer name","total products", "created At", "status"];
	public tableDataEvent : EventEmitter<any> = new EventEmitter<any>();
  	private orderList : any[] = [];
  constructor(
  	private orderService : OrderService,
  	private dialogService : DialogService
  ) { }

  ngOnInit() {
      this.getOrderList();
  }


  getFormattedData(data : any){
  	return {
      "customer name" : data.fbMessageSubscriber.firstName + " " + data.fbMessageSubscriber.lastName,
      "total products" : data.products.length, 
      "created At" : data.orderedAt, 
      "status" : data.orderStatus
    };
  }

  setTableData(){
    let tableList = [];
    for(let i in this.orderList){
      tableList.push(this.getFormattedData(this.orderList[i]));
    }
    this.tableDataEvent.emit(tableList);
  }

  getOrderList(){
  	this.orderService.getOrderList().subscribe((response)=>{
  		console.log(response);
      this.orderList = response.data;
      this.setTableData();
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  };

  updateOrder(data : any){
  	this.orderService.updateOrder(data).subscribe((response)=>{
  		console.log(response);
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  };

  deleteOrder(orderId : string){
  	this.orderService.deleteOrder(orderId).subscribe((response)=>{
  		console.log(response);
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  };


  openOrderModal(){};

}
