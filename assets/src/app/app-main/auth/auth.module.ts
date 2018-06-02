import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { FbConnectComponent } from './fb-connect/fb-connect.component';


/*============================================
=            Definition of Routes            =
============================================*/
const appRoutes : Routes = [{
	path :  '',
	component : SignInComponent
},{
	path : 'sign-up',
	component : SignUpComponent
},{
	path : 'forgot-password',
	component : ForgotPasswordComponent
},{
	path : 'recover-password',
	component : RecoverPasswordComponent
}];


/*=====  End of Definition of Routes  ======*/


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [SignUpComponent, SignInComponent, ForgotPasswordComponent, RecoverPasswordComponent, FbConnectComponent]
})
export class AuthModule { }
