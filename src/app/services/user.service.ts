import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/models/user.model';

import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, router: Router) { }

  /*login(user: User) {
    return this.http.post(`${environment.apiUrlUsers}/login`, user);
  }*/

  /* login(user) {
    return this.http.post<any>(`${environment.apiUrlUsers}/login`, user)
  } */

  /* logout() {
    localStorage.removeItem('access_token');
  } */

  /* public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  } */

}
