import { Component, OnInit, EventEmitter } from '@angular/core';
import { DialogService } from '../../../shared-module';
import { OrderService } from '../../services/order.service';



@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
	public tableColumns : string[] = [];
	public tableDataEvent : EventEmitter<any> = new EventEmitter<any>();
  	private orderList : any[] = [];
  constructor(
  	private orderService : OrderService,
  	private dialogService : DialogService
  ) { }

  ngOnInit() {
  }


  getFormattedData(data : any){
  	return {};
  }

  setTableData(data : any){
  	this.tableDataEvent.emit(data);
  }

  getOrderList(){
  	this.orderService.getOrderList().subscribe((response)=>{
  		console.log(response);
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
