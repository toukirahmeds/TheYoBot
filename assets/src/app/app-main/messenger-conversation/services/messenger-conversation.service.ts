import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, CacheService } from '../../shared-module';
import { PageInfoKey } from '../../configs';

import { FuseConfigChangeService } from '../../services/fuseConfig.service';


@Injectable()
export class MessengerConversationService{
	constructor(
        private cacheService : CacheService,
		private fuseConfigChangeService : FuseConfigChangeService
	){
		this.setFuseConfigs();
	}



	setFuseConfigs(){
		this.fuseConfigChangeService.fuseSetSettingsLoggedIn();
	}

    getPageInfo():any{
        return this.cacheService.get(PageInfoKey);
    }

    
	
}
