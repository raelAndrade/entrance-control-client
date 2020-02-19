import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(
    /* private http: HttpClient, private router: Router */
  ) { }

  /*  login(user, pass) {
     return this.http.post<any>(`${environment.apiUrlUsers}/login`, user)
   } */

  getToken() {
    return localStorage.getItem('token')
  }

  /* ========================================================================================== */
  authenticate(username, password) {
    if (username === "israel" && password === "123") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}
