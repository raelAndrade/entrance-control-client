import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(user) {
    return this.http.post<any>(`${environment.apiUrlUsers}/login`, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  registerUser(user) {
    return this.http.post<any>(`${environment.apiUrlUsers}/register`, user)
  }

  /* private userAuthenticate = false;
  showMenuEmitter = new EventEmitter<boolean>(); */

  /* login(user: User) {
    if (user.name === 'user@teste.com' && user.password === '123456') {
      this.userAuthenticate = true;
      this.showMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.userAuthenticate = false;
      this.showMenuEmitter.emit(false);
    }
  } */

  /* userIsAuthenticate() {
    return this.userAuthenticate;
  } */

  /* logout() {
    this.router.navigate(['/login']);
  } */
}
