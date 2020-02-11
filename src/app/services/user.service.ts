import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) { }

  /*login(user: User) {
  this.http.post<{ access_token: string }>(`${environment.apiUrlUsers}/login`, { name, password }).pipe(tap(res => {

    if (user.name === name && user.password === password) {
      this.userAuthenticate = true;
      this.showMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.userAuthenticate = false;
      this.showMenuEmitter.emit(false);
    }

    localStorage.setItem('access_token', res.access_token);
  }))
  }*/

  /* logout() {
    localStorage.removeItem('access_token');
  } */

  /* public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  } */

}
