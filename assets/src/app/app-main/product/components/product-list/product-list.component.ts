import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '../../../../core/animations';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation : ViewEncapsulation.None,
  animations : fuseAnimations
})
export class ProductListComponent implements OnInit {
	public tableColumnHeaders : any[] = [{"prop" : "Name"},{"name" : "Model"}, {"name" : "Price"},{"name" : "Quantity"}];
  	public tableData : any[] = [{"Name" : "Apple Iphone", "model" : "model x","price" : "$100", "quantity" : 10}];
  	public sideCardOptions : any[] = [{
  		"name" : "Electronics"
  	},{
  		"name" : "Groceries"
  	}];
  constructor() { }

  ngOnInit() {
  }

}
