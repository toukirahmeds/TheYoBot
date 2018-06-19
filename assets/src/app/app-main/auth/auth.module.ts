import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../core/modules/shared.module';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';

import { AuthService } from './services/auth.service';


import { SharedModuleModule } from '../shared-module';

import { AuthFERoutes } from '../configs';


/*============================================
=            Definition of Routes            =
============================================*/
const appRoutes : Routes = [{
	path :  AuthFERoutes.signIn,
	component : SignInComponent
},{
	path : AuthFERoutes.signUp,
	component : SignUpComponent
},{
	path : AuthFERoutes.forgotPassword,
	component : ForgotPasswordComponent
},{
	path : AuthFERoutes.recoverPassword,
	component : RecoverPasswordComponent
}];


/*=====  End of Definition of Routes  ======*/


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    SharedModuleModule
  ],
  declarations: [SignUpComponent, SignInComponent, ForgotPasswordComponent, RecoverPasswordComponent ],
  providers : [AuthService]
})
export class AuthModule { }
