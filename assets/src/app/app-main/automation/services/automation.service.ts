import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AutomationBERoutes } from '../../configs';
import { HttpService } from '../../shared-module';
import { FuseConfigService } from '../../../core/services/config.service';

@Injectable()
export class AutomationService{
	constructor(
		private fuseConfigService : FuseConfigService,
		private httpService : HttpService 
	){

	}

	setFuseConfigs(){
		this.fuseConfigService.setSettings({
            layout          : {
                navigation      : 'left',       // 'right', 'left', 'top', none
                navigationFolded: false,        // true, false
                toolbar         : 'above',      // 'above', 'below', none
                footer          : 'none',        // 'above', 'below', none
                mode            : 'fullwidth'   // 'boxed', 'fullwidth'
            },
            colorClasses    : {
                toolbar: 'mat-white-500-bg',
                navbar : 'mat-fuse-dark-700-bg',
                footer : 'mat-fuse-dark-900-bg'
            },
            customScrollbars: true,
            routerAnimation : 'fadeIn'
        });
	}

	getAutomationList(){
		return this.httpService.sendRequest(HttpService.GET, AutomationBERoutes.list, {});
	}

	createAutomation(automation : any) : Observable<any>{
		return this.httpService.sendRequest(HttpService.POST, AutomationBERoutes.create, automation);
	}

	updateAutomation(automation : any) : Observable<any>{
		return this.httpService.sendRequest(HttpService.PUT, AutomationBERoutes.update, automation);
	}

	deleteAutomation(automation : any){
		return this.httpService.sendRequest(HttpService.DELETE, AutomationBERoutes.delete, {});
	}


}
