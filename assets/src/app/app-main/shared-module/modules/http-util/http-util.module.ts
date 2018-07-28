import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { HttpClientModule, HttpClient, HttpHandler, HTTP_INTERCEPTORS } from "@angular/common/http";

import { Auth2Module } from '../auth2';

import { HttpService } from "./services/http.service";
import { HttpInterceptorService } from "./services/http-interceptor.service";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule,
    Auth2Module
  ],
  declarations: [],
  providers : [HttpService, HttpClient, {
  	provide : HTTP_INTERCEPTORS,
  	useClass : HttpInterceptorService,
  	multi : true
  }]
})
export class HttpUtilModule { }
