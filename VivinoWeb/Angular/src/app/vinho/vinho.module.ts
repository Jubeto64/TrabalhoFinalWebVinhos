import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VinhoRoutingModule } from './vinho-routing.module';
import { VinhoComponent } from './vinho.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VinhoComponent
  ],
  imports: [
    CommonModule,
    VinhoRoutingModule,
    FormsModule
  ]
})
export class VinhoModule { }
