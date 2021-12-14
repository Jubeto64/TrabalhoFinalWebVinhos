import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { AuthService } from './../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
  ) { }
  ngOnInit() {
    this.isUserLogin();
  }
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
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
  }
}