import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinhosComponent } from './vinhos.component';

const routes: Routes = [{ path: '', component: VinhosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VinhosRoutingModule { }
