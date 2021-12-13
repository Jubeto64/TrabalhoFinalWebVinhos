import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegisterComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'lista_vinhos', loadChildren: () => import('./lista-vinhos/lista-vinhos.module').then(m => m.ListaVinhosModule) },
  { path: 'vinho', loadChildren: () => import('./vinho/vinho.module').then(m => m.VinhoModule) },
  { path: 'vinho_user', loadChildren: () => import('./vinho-user/vinho-user.module').then(m => m.VinhoUserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
