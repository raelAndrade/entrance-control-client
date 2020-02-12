import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanLoad } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../../security/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.verifyAccess();
  }

  private verifyAccess() {
    if (this.authService.userIsAuthenticate()) {
      return true;
    }
    this.router.navigate(['/login']);
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.verifyAccess();
  }

}
