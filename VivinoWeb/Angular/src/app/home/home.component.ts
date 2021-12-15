import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
    this._api.getTypeRequest('lista_vinhos').subscribe((res: any) => {
      if (res.status) {

        this.docs = res.data;
        this._router.navigate(['home'])
      } else {
        alert(res.data)
      }
    }, (err: { [x: string]: { message: any; }; }) => {
      this.errorMessage = err['error'].message;
    });
  }
}
