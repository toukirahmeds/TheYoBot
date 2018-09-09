import { Component, OnInit, EventEmitter } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
	public tableColumns : string[] = ["name","id","total","status"];
	public tableDataEvent : EventEmitter<any> = new EventEmitter<any>();
	private bookingList : any[] = [];
  constructor(
  	private bookingService : BookingService
  ) { }

  ngOnInit() {
    this.getBookingList();
  }

  setTableData(){
    let tableList = [];
    for(let i in this.bookingList){
      tableList.push(this.getTableFormattedService(this.bookingList[i]));
    }
  	this.tableDataEvent.emit(tableList);
  }

  getTableFormattedService(data : any):any{
  	return {
  		_id : data._id,
  		name : data.fbMessageSubscriber.firstName + " " + data.fbMessageSubscriber.lastName,
  		id : data && data.fbMessageSubscriber && data.fbMessageSubscriber.psid? data.fbMessageSubscriber.psid : "",
  		total : data.services.length,
  		status : data.bookingStatus
  	};
  }


  getBookingList(){
  	this.bookingService.getBookingList().subscribe((response)=>{
  		console.log(response);
      this.bookingList = response.data;
      this.setTableData();
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  }

  deleteBooking(bookingId : string){
  	this.bookingService.deleteBooking(bookingId).subscribe((response)=>{
  		console.log(response);
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  }

  createBooking(bookingInfo : any){
  	this.bookingService.updateBookingList(bookingInfo).subscribe((response)=>{
  		console.log(response);
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  }


  openBookingModal(){

  }

}
