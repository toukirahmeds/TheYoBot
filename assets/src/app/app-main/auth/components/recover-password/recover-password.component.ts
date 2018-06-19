import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AuthService } from '../../services/auth.service';
import { fuseAnimations } from '../../../../core/animations';


@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss'],
  animations : fuseAnimations
})
export class RecoverPasswordComponent implements OnInit {
	public recoverPasswordForm : FormGroup;
  constructor(
  	private formBuilder : FormBuilder,
  	private authService : AuthService
  ) { }

  ngOnInit() {
  }

  initRecoverPasswordForm(){
  	this.recoverPasswordForm = this.formBuilder.group({
  		'newPassword' : ['', Validators.required],
  		'confirmPassword' : ['', Validators.required]
  	});
  }

  recoverPassword(){

  }

}
