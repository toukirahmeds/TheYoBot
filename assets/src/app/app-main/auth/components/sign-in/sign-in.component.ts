import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';


import { AuthService } from '../../services/auth.service';
import { fuseAnimations } from '../../../../core/animations';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations : fuseAnimations
})
export class SignInComponent implements OnInit {
	public signInForm : FormGroup;
  public fuseConfigs : any;
  public onFuseConfigChange : Subscription;
  constructor(
  	private formBuilder : FormBuilder,
    private authService  : AuthService
  ) {
  }

  ngOnInit() {
  	console.log("THIS IS THE SIGN IN COMPONENT");
    this.authService.setFuseConfigs();

    this.initSignInForm();
  }

  initSignInForm(){
  	this.signInForm = this.formBuilder.group({
  		'userIdentity' : ['',Validators.required],
  		'password' : ['', Validators.required]
  	});
  }

  signIn(signInInfo:any){
    this.authService.signIn(signInInfo).subscribe((response)=>{
      console.log(response);
      this.authService.redirectToPage();
    },(errorResponse)=>{
      console.log(errorResponse);
    });
  }

}
