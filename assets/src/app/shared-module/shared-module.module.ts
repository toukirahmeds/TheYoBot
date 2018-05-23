import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout"; 
import { DialogModule, DialogMainComponent } from "./modules/dialog";
import { MatModule } from "./modules/mat-module";
import { FbModule } from "./modules/fb-module";
import { HttpUtilModule } from "./modules/http-util";

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    MatModule,
    FlexLayoutModule,
    FbModule,
    HttpUtilModule
  ],
  exports : [ DialogModule, MatModule, FlexLayoutModule, FbModule],
  declarations: [],
  entryComponents : []
})
export class SharedModuleModule { }
