import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TokenService } from './services/token.service';
import { ScopeService } from './services/scope.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ TokenService, ScopeService ]
})
export class Auth2Module { }
