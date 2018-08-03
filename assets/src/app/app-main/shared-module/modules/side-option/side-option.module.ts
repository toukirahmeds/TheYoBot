import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideOptionComponent } from './components/side-option/side-option.component';

import { MatCardModule, MatListModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [SideOptionComponent],
  exports : [SideOptionComponent]
})
export class SideOptionModule { }
