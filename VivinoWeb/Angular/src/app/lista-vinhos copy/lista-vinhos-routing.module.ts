import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVinhosComponent } from './lista-vinhos.component';

const routes: Routes = [{ path: '', component: ListaVinhosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaVinhosRoutingModule { }
