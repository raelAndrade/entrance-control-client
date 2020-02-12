import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { User } from '../models/user.model';

@Injectable()
export class AuthService {

  private userAuthenticate = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(user: User) {
    if (user.name === 'user@teste.com' && user.password === '123456') {
      this.userAuthenticate = true;
      this.showMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.userAuthenticate = false;
      this.showMenuEmitter.emit(false);
    }
  }

  userIsAuthenticate() {
    return this.userAuthenticate;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
