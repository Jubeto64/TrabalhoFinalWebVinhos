import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinhoUserComponent } from './vinho-user.component';

const routes: Routes = [{ path: '', component: VinhoUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VinhoUserRoutingModule { }
