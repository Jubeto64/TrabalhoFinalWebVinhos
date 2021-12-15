import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';

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
    private _api: ApiService
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
}
