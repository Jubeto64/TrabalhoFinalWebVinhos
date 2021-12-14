import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CadastraVinhosRoutingModule } from './cadastra-vinhos-routing.module';
import { CadastraVinhosComponent } from './cadastra-vinhos.component';


@NgModule({
  declarations: [
    CadastraVinhosComponent
  ],
  imports: [
    CommonModule,
    CadastraVinhosRoutingModule,
    FormsModule
  ]
})
export class CadastraVinhosModule { }
