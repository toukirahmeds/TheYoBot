import { Component, OnInit, ViewEncapsulation, TemplateRef, ViewChild, EventEmitter } from '@angular/core';
import { fuseAnimations } from '../../../../core/animations';
import { DialogService } from '../../../shared-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation : ViewEncapsulation.None,
  animations : fuseAnimations
})
export class ProductListComponent implements OnInit {
  @ViewChild('productFormTemplate') public productFormTemplate : TemplateRef<any>;
	public sideCardOptions : any[] = [{
		"name" : "Electronics"
	},{
		"name" : "Groceries"
	}];

  public tableColumns : string[] = ["name", "model", "price", "quantity"];
  public tableData : EventEmitter<any> = new EventEmitter<any>();
  public productList : any[] = [{
    "name" : "Apple Iphone",
    "model" : "X",
    "price" : 75000,
    "quantity" : 10
  }];
  public productForm : FormGroup;
  constructor(
    private dialogService : DialogService,
    private formBuilder : FormBuilder,
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.getProductList();
  }


  getProductList(){
    this.productList = [];
    this.productService.getProductList().subscribe((response)=>{
      console.log(response);
      for(let i in response.data){
        this.productList.push(this.getFormattedTableData(response.data[i]));
      }
      console.log(this.productList);
      this.setTableData(this.productList);
    },(errorResponse)=>{
      console.log(errorResponse);
    });
  }


  initProductForm(){
    this.productForm = this.formBuilder.group({
      "_id" : ["",[Validators.required]],
      "name" : ["",[Validators.required]],
      "model" : ["", [Validators.required]],
      "type" : ["", [Validators.required]],
      "quantityAvailable" : [0, [Validators.required]],
      "price" : [0, [Validators.required]]
    });
  }

  getFormattedTableData(data : any):any{
    return {
       _id : data._id,
       name : data.name,
       model : data.model,
       price : 100,
       quantity : data.quantityAvailable
    };
  }

  setTableData(data : any){
    this.tableData.emit(data);
  }


  createProduct(productInfo  : any, callback){
    this.productService.createProduct(productInfo).subscribe((response)=>{
      console.log(response);
      this.productList.push(this.getFormattedTableData(response.data));
      this.setTableData(this.productList);
      callback(true);
    });
  }


  editProduct(productInfo : any, callback){
    this.productService.editProduct(productInfo).subscribe((response)=>{
      console.log(response);
    },(errorResponse)=>{
      console.log(errorResponse);
    });
  }


  deleteProduct(productId : string, callback){
    this.productService.deleteProduct(productId).subscribe((response)=>{
      console.log(response);
    }, (errorResponse)=>{
      console.log(errorResponse);
    });
  }




  openProductFormModal(){
    this.initProductForm();

    let confirm = (cb)=>{
      delete this.productForm.value["_id"];
      this.createProduct(this.productForm.value,(result)=>{
        if(result) cb(true);
        else cb(false);
      });
    };
    this.dialogService.openModal({
      width : '750px',
      data : {
        body : {
          template : this.productFormTemplate
        },
        callback : {
          confirm : confirm
        }
      }
    });
  }

}
