import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vinho',
  templateUrl: './vinho.component.html',
  styleUrls: ['./vinho.component.css']
})
export class VinhoComponent implements OnInit {
  errorMessage: any
  docs: any
  mediaEstrelas: any
  reviews: any
  vinho_id: any
  forms: any
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.vinho_id = history.state.data
    this._api.postTypeRequest('get_vinho_by_id', {"id": this.vinho_id}).subscribe((res: any) => {
      if (res.status) {
        this.docs = res.data;
      } else {
        alert("Erro no vinho")
      }
    }, (err: { [x: string]: { message: any; }; }) => {
      this.errorMessage = err['error'].message;
    });

    this._api.getTypeRequest('reviews').subscribe((res: any) => {
      if (res.status) {
        this.reviews = res.data;
      } else {
        console.log("Erro")
      }
    }, (err: { [x: string]: { message: any; }; }) => {
      this.errorMessage = err['error'].message;
    });
  }

  onSubmit(form: NgForm) {
    form.value['user_id'] = this._auth.getUserDetails()[0]._id;
    form.value['user_name'] = this._auth.getUserDetails()[0].Usuario;
    form.value['vinho_id'] = this.vinho_id;
    console.log('Your form data : ');
    console.log(form.value);
    this._api.postTypeRequest('nova_review', form.value).subscribe((res: any) => {
      if (res.status) {
        alert("Review cadastrada com sucesso!");
        this._router.navigate(['']);
      } else {
        alert("Erro ao cadastrar: ")
      }
    }, (err: { [x: string]: { message: any; }; }) => {
      this.errorMessage = err['error'].message;
    });
  }
}
