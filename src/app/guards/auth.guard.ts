import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../security/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.verifyAccess();
  }

  /*  canActivate(): boolean {
     if (this.authService.loggedIn()) {
       console.log('true')
       return true
     } else {
       console.log('false')
       this.router.navigate(['/login'])
       return false
     }
   } */

  private verifyAccess(): boolean {
    if (this.authService.loggedIn()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
    /* if (this.authService.userIsAuthenticate()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false; */
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canLoad: verificando se usuário pode carregar o cod módulo');
    return this.verifyAccess();
  }

}
