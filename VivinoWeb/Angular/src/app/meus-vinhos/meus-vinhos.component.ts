import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { AuthService } from './../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meus-vinhos',
  templateUrl: './meus-vinhos.component.html',
  styleUrls: ['./meus-vinhos.component.css']
})
export class MeusVinhosComponent implements OnInit {
  user_id: any
  errorMessage: any
  docs: any
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
  ) { }

  ngOnInit() {
    let value = {id_usuario: this._auth.getUserDetails()[0]._id}
    console.log('Your form data : ' + value.id_usuario);
    this._api.getTypeRequest('lista_vinhos_usuario?id_usuario='+value.id_usuario).subscribe((res: any) => {

      if(res.status){
        this.docs = res.data;
        console.log(this.docs);
        this._router.navigate(['meus_vinhos'])
      } else {
        alert(res.msg)
      }
    }, (err: { [x: string]: { message: any; }; }) => {
      this.errorMessage = err['error'].message;
    });
  }
}
