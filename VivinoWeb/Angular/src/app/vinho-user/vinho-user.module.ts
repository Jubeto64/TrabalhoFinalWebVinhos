import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VinhoUserRoutingModule } from './vinho-user-routing.module';
import { VinhoUserComponent } from './vinho-user.component';


@NgModule({
  declarations: [
    VinhoUserComponent
  ],
  imports: [
    CommonModule,
    VinhoUserRoutingModule
  ]
})
export class VinhoUserModule { }
