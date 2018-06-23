import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout"; 
import { DialogModule, DialogMainComponent } from "./modules/dialog";
import { MatModule } from "./modules/mat-module";
import { FbModule } from "./modules/fb-module";
import { HttpUtilModule } from "./modules/http-util";
import { Auth2Module } from "./modules/auth2";
import { CacheModule } from "./modules/cache";
// import { BottomSheetModule } from './modules/bottom-sheet';
import { BottomSheetModule } from "./modules/bottom-sheet";


@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    MatModule,
    FlexLayoutModule,
    FbModule,
    HttpUtilModule,
    Auth2Module,
    CacheModule
  ],
  exports : [ DialogModule, MatModule, FlexLayoutModule, FbModule],
  declarations: [],
  entryComponents : []
})
export class SharedModuleModule { }
