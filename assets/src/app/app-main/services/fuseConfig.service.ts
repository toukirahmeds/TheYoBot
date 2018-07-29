import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { FuseConfigService } from '../../core/services/config.service';


@Injectable()
export class FuseConfigChangeService implements OnDestroy{
	private fuseConfigSubscription : Subscription;

	private static fuseLoggedInSettings : any = {
        layout          : {
            navigation      : 'left', // 'right', 'left', 'top', 'none'
            navigationFolded: false, // true, false
            toolbar         : 'below', // 'above', 'below', 'none'
            footer          : 'none', // 'above', 'below', 'none'
            mode            : 'fullwidth' // 'boxed', 'fullwidth'
        },
        colorClasses    : {
            toolbar: 'mat-white-500-bg',
            navbar : 'mat-fuse-dark-700-bg',
            footer : 'mat-fuse-dark-900-bg'
        },
        customScrollbars: true,
        routerAnimation : 'fullwidth' // fadeIn, slideUp, slideDown, slideRight, slideLeft, none
    };

    private static fuseLoggedOutSettings : any = {
            layout          : {
                navigation      : 'none', // 'right', 'left', 'top', 'none'
                navigationFolded: false, // true, false
                toolbar         : 'none', // 'above', 'below', 'none'
                footer          : 'none', // 'above', 'below', 'none'
                mode            : 'fullwidth' // 'boxed', 'fullwidth'
            },
            colorClasses    : {
                toolbar: 'mat-white-500-bg',
                navbar : 'mat-fuse-dark-700-bg',
                footer : 'mat-fuse-dark-900-bg'
            },
            customScrollbars: true,
            routerAnimation : 'fadeIn' // fadeIn, slideUp, slideDown, slideRight, slideLeft, none
        }
	constructor(
		private fuseConfigService : FuseConfigService
	){

	}


	fuseSetSettingsLoggedIn(){
		this.fuseConfigService.setSettings(FuseConfigChangeService.fuseLoggedInSettings);
	}

	fuseSetSettingsLoggedOut(){
		this.fuseConfigService.setSettings(FuseConfigChangeService.fuseLoggedOutSettings);
	}

	ngOnDestroy(){
		this.fuseConfigSubscription.unsubscribe();
	}
}