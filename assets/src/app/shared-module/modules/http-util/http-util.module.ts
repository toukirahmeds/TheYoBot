import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { HttpClientModule, HttpClient, HttpHandler } from "@angular/common/http";
import { HttpService } from "./services/http.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [],
  providers : [HttpService, HttpClient]
})
export class HttpUtilModule { }
