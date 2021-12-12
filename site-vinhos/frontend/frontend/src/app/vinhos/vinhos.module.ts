import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VinhosRoutingModule } from './vinhos-routing.module';
import { VinhosComponent } from './vinhos.component';


@NgModule({
  declarations: [
    VinhosComponent
  ],
  imports: [
    CommonModule,
    VinhosRoutingModule
  ]
})
export class VinhosModule { }
