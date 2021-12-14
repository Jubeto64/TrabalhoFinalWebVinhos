import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraVinhosComponent } from './cadastra-vinhos.component';

const routes: Routes = [{ path: '', component: CadastraVinhosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastraVinhosRoutingModule { }
