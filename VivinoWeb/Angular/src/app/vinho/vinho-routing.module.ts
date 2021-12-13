import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinhoComponent } from './vinho.component';

const routes: Routes = [{ path: '', component: VinhoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VinhoRoutingModule { }
