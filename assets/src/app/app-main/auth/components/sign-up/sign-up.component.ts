import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FBUserService } from '../../../shared-module';

import { AuthService } from '../../services/auth.service';
import { fuseAnimations } from '../../../../core/animations';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations : fuseAnimations
})
export class SignUpComponent implements OnInit {
	public userSignUpForm : FormGroup;
  constructor(
  	private formBuilder : FormBuilder,
  	private fbUserService : FBUserService,
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.authService.setFuseConfigs();
  	this.initSignInForm();
  }

  initSignInForm(){
  	this.userSignUpForm = this.formBuilder.group({
  		'email' : ['',[Validators.required]],
  		'mobile' : ['', [Validators.required]],
  		'password' : ['',[Validators.required]],
  		'fbAccessToken' : ['',[Validators.required]],
  		'fbId' : ['',[Validators.required]],
  		'name' : ['',[Validators.required]]
  	});
  }

  setFbAccessToken(fbAccessToken : string){
  	this.userSignUpForm.get('fbAccessToken').setValue(fbAccessToken);
  }

  setFbInfo(name: string, fbId : string){
  	this.userSignUpForm.get('name').setValue(name);
  	this.userSignUpForm.get('fbId').setValue(fbId);
  	// this.userSignUpForm.get('fbAccessToken').setValue(fbAccessToken);
  }

  getCurrentUserInfo(){
  	
  	this.fbUserService.currentUserInfo((error, fbCurrentUserInfo)=>{
  		if(error){
  			console.log(error);
  		}else{
  			console.log(fbCurrentUserInfo);
  		}
  	});
  }


  loginFb(){
  	this.fbUserService.login((error, loggedInStatus)=>{
  		if(error){
  			console.log(error);
  		}else{
  			console.log(loggedInStatus);
  			this.getCurrentUserInfo();
  		}
  	});
  }


  connectToFb(){
  	this.fbUserService.loginStatus((error, loggedInStatus)=>{
  		if(error){
  			console.log(error);
  		}else{
  			console.log(loggedInStatus);
  			if(loggedInStatus.status === "connected"){
  				this.getCurrentUserInfo();
  			}else{
  				this.loginFb();
  			}
  		}
  	});
  }

  




}
