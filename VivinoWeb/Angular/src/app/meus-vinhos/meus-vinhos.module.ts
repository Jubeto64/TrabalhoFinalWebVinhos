import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeusVinhosRoutingModule } from './meus-vinhos-routing.module';
import { MeusVinhosComponent } from './meus-vinhos.component';


@NgModule({
  declarations: [
    MeusVinhosComponent
  ],
  imports: [
    CommonModule,
    MeusVinhosRoutingModule
  ]
})
export class MeusVinhosModule { }
