import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, CacheService } from '../../shared-module';
import { FuseConfigService } from '../../../core/services/config.service';
import { PageInfoKey } from '../../configs';

@Injectable()
export class MessengerConversationService{
	constructor(
        private cacheService : CacheService,
		private fuseConfigService : FuseConfigService
	){
		this.setFuseConfigs();
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

    getPageInfo():any{
        return this.cacheService.get(PageInfoKey);
    }
	
}
