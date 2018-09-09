import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FBUserService } from '../../../shared-module';

import { AuthService } from '../../services/auth.service';
import { fuseAnimations } from '../../../../core/animations';
import { FBAppId } from '../../../configs';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations : fuseAnimations
})
export class SignUpComponent implements OnInit {
	public userSignUpForm : FormGroup;
  public signUpSuccess : boolean = false;
  public creatingAccount : boolean = false;
  public accountCreationFailed : boolean = false;
  public connectingToFacebook  : boolean = false;
  constructor(
  	private formBuilder : FormBuilder,
  	private fbUserService : FBUserService,
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
    this.fbUserService.initFb(FBAppId);
  	this.initSignInForm();
  }

  initSignInForm(){
  	this.userSignUpForm = this.formBuilder.group({
  		'email' : ['',[Validators.required]],
      'username' : [''],
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
  }

  setUsername(){
    this.userSignUpForm.get('username').setValue(this.userSignUpForm.value.email.split("@")[0]);
  }

  getCurrentUserInfo(){
  	
  	this.fbUserService.currentUserInfo((error, fbCurrentUserInfo)=>{
  		if(error){
  			console.log(error);
  		}else{
        this.setFbInfo(fbCurrentUserInfo.name, fbCurrentUserInfo.id);
  		}
  	});
  }


  loginFb(){
    console.log("LOGIN FB");
  	this.fbUserService.login((error, loggedInStatus)=>{
  		if(error){
  			console.log(error);
  		}else{
        if(loggedInStatus.status === "connected"){
          this.setFbAccessToken(loggedInStatus.authResponse.accessToken);
          this.getCurrentUserInfo();
          this.connectingToFacebook = false;
        }
  		}
  	});
  }


  connectToFb(){
    this.connectingToFacebook = true;
  	this.fbUserService.loginStatus((error, loggedInStatus)=>{
  		if(error){
  			console.log(error);
  		}else{
  			if(loggedInStatus.status === "connected"){
          this.setFbAccessToken(loggedInStatus.authResponse.accessToken);
  				this.getCurrentUserInfo();
          this.connectingToFacebook = false;
  			}else{
  				this.loginFb();
  			}
  		}
  	});
  }



  signUp(){
    this.creatingAccount = true;
    this.signUpSuccess = false;
    this.accountCreationFailed = false;
    this.setUsername();
    this.authService.signUp(this.userSignUpForm.value).subscribe((response)=>{
      console.log(response);
      this.creatingAccount = false;
      this.signUpSuccess = true;
      this.router.navigateByUrl("");
    },(errorResponse)=>{
      console.log(errorResponse);
      this.creatingAccount = false;
      this.accountCreationFailed = true;
    });
  }

  




}
