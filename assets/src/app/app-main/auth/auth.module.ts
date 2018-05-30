import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { FbConnectComponent } from './fb-connect/fb-connect.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SignUpComponent, SignInComponent, ForgotPasswordComponent, RecoverPasswordComponent, FbConnectComponent]
})
export class AuthModule { }
