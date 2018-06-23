import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CacheService } from './services/cache.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [ CacheService ]
})
export class CacheModule { }
