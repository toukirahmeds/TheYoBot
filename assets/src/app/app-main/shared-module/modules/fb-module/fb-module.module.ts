import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookModule } from "ngx-facebook";
import { FbService } from "./services/fb.service";
import { FBUserService } from "./services/fb-user.service";
import { FBPageService } from './services/fb-page.service';

@NgModule({
  imports: [
    CommonModule,
    FacebookModule.forRoot()
  ],
  exports : [],
  declarations: [],
  providers : [ FbService, FBUserService, FBPageService ]
})
export class FbModule { }
