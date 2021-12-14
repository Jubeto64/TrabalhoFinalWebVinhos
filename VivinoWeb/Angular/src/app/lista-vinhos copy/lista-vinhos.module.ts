import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaVinhosRoutingModule } from './lista-vinhos-routing.module';
import { ListaVinhosComponent } from './lista-vinhos.component';


@NgModule({
  declarations: [
    ListaVinhosComponent
  ],
  imports: [
    CommonModule,
    ListaVinhosRoutingModule
  ]
})
export class ListaVinhosModule { }
