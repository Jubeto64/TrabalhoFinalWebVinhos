import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any
  docs: any
  reload = 0
  constructor(
    private _api: ApiService,
    private _router: Router
  ) { }
    
  ngOnInit() {
    if (!localStorage.getItem('reload')) { 
      localStorage.setItem('reload', '1') 
      location.reload() 
    } else {
      localStorage.removeItem('reload') 
    }
    
    this._api.getTypeRequest('lista_vinhos').subscribe((res: any) => {
      if (res.status) {
        this.docs = res.data;
      } else {
        alert(res.data)
      }
    }, (err: { [x: string]: { message: any; }; }) => {
      this.errorMessage = err['error'].message;
    });
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    this._api.postTypeRequest('login', form.value).subscribe((res: any) => {
      if (res.status) {
        this.docs = res.data;
        this._router.navigate(['']);
      } else {
      }
    }, (err: { [x: string]: { message: any; }; }) => {
      this.errorMessage = err['error'].message;
    });
  }

  abrir_produto(_id: any){
    this._router.navigate(['vinho'], {state: {data: _id}})
  }
}
