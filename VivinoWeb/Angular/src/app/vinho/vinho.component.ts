import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
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
    this._api.postTypeRequest('reviews', form.value).subscribe((res: any) => {
      if (res.status) {
        this.docs = res.data;
        this._router.navigate(['']);
      } else {
      }
    }, (err: { [x: string]: { message: any; }; }) => {
      this.errorMessage = err['error'].message;
    });
  }
}
