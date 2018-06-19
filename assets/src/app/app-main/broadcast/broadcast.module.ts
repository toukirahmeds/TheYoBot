import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BroadcastMainComponent } from './components/broadcast-main/broadcast-main.component';

import { BroadcastService } from './services/broadcast.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BroadcastMainComponent],
  providers : [ BroadcastService ]
})
export class BroadcastModule { }
