import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { AuthService } from './../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-vinhos',
  templateUrl: './lista-vinhos.component.html',
  styleUrls: ['./lista-vinhos.component.css']
})
export class ListaVinhosComponent implements OnInit {
  isLogin: boolean = false
  user_id: any
  errorMessage: any
  docs: any
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
  ) { }

  ngOnInit() {
    //this.isUserLogin();

    this._api.getTypeRequest('lista_vinhos').subscribe((res: any) => {
      if(res.status){
        this.docs = res.data;
        console.log(this.docs);
        this._router.navigate([''])
      } else {
        alert(res.msg)
      }
    }, (err: { [x: string]: { message: any; }; }) => {
      this.errorMessage = err['error'].message;
    });
  }

  getVinhos() {
    this._api.getTypeRequest('lista_vinhos').subscribe((res: any) => {
      if(res.status){
        this.docs = res.data.string;
        console.log(this.docs);
        this._router.navigate([''])
      } else {
        console.log(res)
        alert(res.msg)
      }
    }, (err: { [x: string]: { message: any; }; }) => {
      this.errorMessage = err['error'].message;
    });
  }

  /*onSubmit(form: NgForm) {
    this._api.getTypeRequest('lista_vinhos').subscribe((res: any) => {
      if(res.status){
        this.docs = JSON.stringify(res);
        this._router.navigate(['lista_vinhos'])
      } else {
        console.log(res)
        alert(res.msg)
      }
    }, (err: { [x: string]: { message: any; }; }) => {
      this.errorMessage = err['error'].message;
    });

    this._api.postTypeRequest('registrar', form.value).subscribe((res: any) => {
      if (res.status) {
        console.log(res)
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
        this._auth.setDataInLocalStorage('token', res.token);
        this._router.navigate(['home']);
      } else {
        console.log(res)
        alert(res.msg)
      }
    }, (err: { [x: string]: { message: any; }; }) => {
      this.errorMessage = err['error'].message;
    });
  }

  isUserLogin() {
    if (this._auth.getUserDetails() != null) {
      this.isLogin = true;
    }
  }*/
}