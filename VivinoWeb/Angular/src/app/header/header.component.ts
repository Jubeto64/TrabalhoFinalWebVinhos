import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../services/api.service';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
    
  ) {}

  ngOnInit() {
    this.isUserLogin();
  }

  isUserLogin(){
    if(this._auth.getUserDetails() != null) {
      this.isLogin = true;
    }
  }
}
