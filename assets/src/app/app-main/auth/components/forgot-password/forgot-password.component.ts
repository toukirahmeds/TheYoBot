import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

import { fuseAnimations } from '../../../../core/animations';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations : fuseAnimations
})
export class ForgotPasswordComponent implements OnInit {
	public forgotPasswordForm : FormGroup;
  constructor(
  	private formBuilder : FormBuilder,
  	private authService : AuthService
  ) { }

  ngOnInit() {

  	this.authService.setFuseConfigs();
  	this.initForgotPasswordForm();
  }

  initForgotPasswordForm(){
  	this.forgotPasswordForm = this.formBuilder.group({
  		'email' : ['', Validators.required]
  	});
  }

  sendPasswordResetLink(){

  }

}
