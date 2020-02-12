import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(user) {
    return this.http.post<any>(`${environment.apiUrlUsers}/login`, user)
  }

  loggedIn() {
    return !localStorage.getItem('token')
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
}
