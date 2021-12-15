import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeusVinhosComponent } from './meus-vinhos.component';

const routes: Routes = [{ path: '', component: MeusVinhosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeusVinhosRoutingModule { }
