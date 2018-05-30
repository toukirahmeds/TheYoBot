import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule  } from "@angular/flex-layout";

import { MatModule } from "../mat-module";

import { DialogHeaderComponent } from './components/dialog-header/dialog-header.component';
import { DialogFooterComponent } from './components/dialog-footer/dialog-footer.component';
import { DialogBodyComponent } from './components/dialog-body/dialog-body.component';
import { DialogMainComponent, DialogRef } from './components/dialog-main/dialog-main.component';
import { DialogService } from "./services/dialog.service";
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatModule
  ],
  declarations: [DialogHeaderComponent, DialogFooterComponent, DialogBodyComponent, DialogMainComponent],
  exports : [DialogHeaderComponent, DialogFooterComponent, DialogBodyComponent, DialogMainComponent, MatModule],
  providers : [DialogRef, DialogService],
  entryComponents : [DialogMainComponent]
})
export class DialogModule { }
