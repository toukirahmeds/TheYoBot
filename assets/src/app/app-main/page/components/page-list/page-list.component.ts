import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { fuseAnimations } from '../../../../core/animations';



@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss'],
  animations : fuseAnimations
})
export class PageListComponent implements OnInit {
	public pageList : any[] = [];

  constructor(
  	private pageService : PageService
  ) { }

  ngOnInit() {
  	this.pageService.getPageList((error, response)=>{
  		if(error){
  			console.log(error);
  		}else{
  			console.log(response);
  			if(response.data){
  				this.pageList = response.data;
  			}
      }
    });

  }


  connectToPage(pageInfo : any){
    this.pageService.createPage(this.pageService.getformattedPageInfo(pageInfo)).subscribe((response)=>{
      this.pageService.savePageInfoToCache(response.data);
      this.pageService.redirectToDashboard();
      // console.log(response);
    },(errorResponse)=>{
      console.log(errorResponse);
    });
  }

}
