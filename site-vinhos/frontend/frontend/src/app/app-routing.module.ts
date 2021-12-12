import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NewUserComponent } from './auth/new-user/new-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: NewUserComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'vinhos', loadChildren: () => import('./vinhos/vinhos.module').then(m => m.VinhosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
