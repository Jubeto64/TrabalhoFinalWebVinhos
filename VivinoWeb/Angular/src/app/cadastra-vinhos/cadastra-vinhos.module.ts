import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastraVinhosRoutingModule } from './cadastra-vinhos-routing.module';
import { CadastraVinhosComponent } from './cadastra-vinhos.component';


@NgModule({
  declarations: [
    CadastraVinhosComponent
  ],
  imports: [
    CommonModule,
    CadastraVinhosRoutingModule
  ]
})
export class CadastraVinhosModule { }
