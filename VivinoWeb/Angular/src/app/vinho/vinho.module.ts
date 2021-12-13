import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VinhoRoutingModule } from './vinho-routing.module';
import { VinhoComponent } from './vinho.component';


@NgModule({
  declarations: [
    VinhoComponent
  ],
  imports: [
    CommonModule,
    VinhoRoutingModule
  ]
})
export class VinhoModule { }
