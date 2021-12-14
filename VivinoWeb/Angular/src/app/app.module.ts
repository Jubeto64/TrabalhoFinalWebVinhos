import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { ListaVinhosModule } from './lista-vinhos/lista-vinhos.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    ListaVinhosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
