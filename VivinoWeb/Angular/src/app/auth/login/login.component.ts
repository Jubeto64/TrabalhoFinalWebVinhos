import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from './../../services/api.service'
import { AuthService } from './../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any
  user_id: any
  refresh: any
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.isUserLogin();
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    this._api.postTypeRequest('login', form.value).subscribe((res: any) => {
      if (res.status) {
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
        this.user_id = res.data._id;
        console.log(JSON.stringify(res.data.Usuario));
        this._auth.setDataInLocalStorage('token', res.token);
        this._router.navigate(['']);
      } else {
      }
    }, (err: { [x: string]: { message: any; }; }) => {
      this.errorMessage = err['error'].message;
    });
  }

  isUserLogin() {
    console.log(this._auth.getUserDetails())
    if (this._auth.getUserDetails() != null) {
      this.isLogin = true;
    }
  }

  logout() {
    this._auth.clearStorage()
    this._router.navigate(['']);
  }
}