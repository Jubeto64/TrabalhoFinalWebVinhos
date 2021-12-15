import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { AuthService } from './../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-vinhos',
  templateUrl: './cadastra-vinhos.component.html',
  styleUrls: ['./cadastra-vinhos.component.css']
})
export class CadastraVinhosComponent implements OnInit {
  errorMessage: any
  isLogin: boolean = false
  
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.isUserLogin();
  }

  isUserLogin(){
    if(this._auth.getUserDetails() != null) {
      this.isLogin = true;
    }
  }

  onSubmit(form: NgForm) {
    form.value['id_usuario'] = this._auth.getUserDetails()[0]._id
    console.log('Your form data : ', form.value);
    this._api.postTypeRequest('adiciona_vinho', form.value).subscribe((res: any) => {
      if (res.status) {
        alert("Vinho cadastrado com sucesso!");
        this._router.navigate(['meus_vinhos'])
      } else {
        alert("Erro ao cadastrar: " + res.data)
      }
    }, (err: { [x: string]: { message: any; }; }) => {
      this.errorMessage = err['error'].message;
    });
  }

}
