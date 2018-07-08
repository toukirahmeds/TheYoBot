import { Injectable } from '@angular/core';
import { TokenService } from '../shared-module';
import { AuthService } from '../auth';


@Injectable()
export class AppMainService{
	constructor(
		private tokenService : TokenService,
		private authService : AuthService
	){}

	checkUserLoggedIn(){
		if(this.tokenService.getAccessToken()){
			// this.authService.
		}else{
			this.authService.signOut().subscribe((response)=>{
				this.authService.redirectToLogin();
			},(errorResponse)=>{

			});
		}
	};
}