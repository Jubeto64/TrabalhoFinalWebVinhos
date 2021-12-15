import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registrar', component: RegisterComponent},
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'cadastra_vinhos', loadChildren: () => import('./cadastra-vinhos/cadastra-vinhos.module').then(m => m.CadastraVinhosModule) },
  { path: 'meus_vinhos', loadChildren: () => import('./meus-vinhos/meus-vinhos.module').then(m => m.MeusVinhosModule) },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
