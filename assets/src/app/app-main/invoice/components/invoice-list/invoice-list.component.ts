import { Component, OnInit, EventEmitter } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { DialogService } from '../../../shared-module';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
	public tableColumns : string[] = ["customer","date","total","status"];
	public tableDataEvent : EventEmitter<any> = new EventEmitter<any>();
  	private invoiceList : any[] = [];
  constructor(
  	private invoiceService : InvoiceService,
  	private dialogService  : DialogService
  ) { }

  ngOnInit() {
  }

  getFormattedData(data : any){
  	return {};
  };

  setTableData(data : any){
  	this.tableDataEvent.emit(data);
  };

  getInvoiceList(){
  	this.invoiceList = [];
  	this.invoiceService.getInvoiceList().subscribe((response:any)=>{
  		console.log(response);
  		for(let i in response["data"]){
  			this.invoiceList.push(this.getFormattedData(response["data"][i]));
  		}//for loop ends here
  		this.setTableData(this.invoiceList);
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  };

  updateInvoice(data : any){
  	this.invoiceService.updateInvoice(data).subscribe((response)=>{
  		console.log(response);
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  };

  deleteInvoice(invoiceId : string){
  	this.invoiceService.deleteInvoice(invoiceId).subscribe((response)=>{
  		console.log(response);
  	},(errorResponse)=>{
  		console.log(errorResponse);
  	});
  };


  openInvoiceModal(): void{

  };

}
