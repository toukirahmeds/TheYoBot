import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';


import { AuthService } from '../../services/auth.service';
import { fuseAnimations } from '../../../../core/animations';
import { FuseConfigChangeService } from '../../../services/fuseConfig.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations : fuseAnimations
})
export class SignInComponent implements OnInit {
	public signInForm : FormGroup;
  constructor(
  	private formBuilder : FormBuilder,
    private authService  : AuthService,
    private fuseConfigChangeService : FuseConfigChangeService
  ) {
  }

  ngOnInit() {
    this.initSignInForm();
  }

  initSignInForm(){
  	this.signInForm = this.formBuilder.group({
  		'userIdentity' : ['',Validators.required],
  		'password' : ['', Validators.required]
  	});
  }

  signIn(){
    this.authService.signIn(this.signInForm.value).subscribe((response)=>{
      this.authService.saveFbAccessToken(response.body.user.fbAccessToken);
      if(response.body.user.currentPage){
        this.authService.saveCurrentPage(response.body.user.currentPage);
      }else{
        this.authService.redirectToPage();
      }
    },(errorResponse)=>{});
  }

}
