import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SharedService } from '../../services/shared.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  public shared: SharedService;

  constructor(private router: Router) {
    this.shared = SharedService.getInstance();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | boolean {

    if (this.shared.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  /*constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.auth.isAccessTokenInvalido()) {
      console.log('Navegação com access token inválido. Obtendo novo token...');
      return this.auth.getNewAccessToken()
        .then(() => {
          if (this.auth.isAccessTokenInvalido()) {
            this.router.navigate(['/login']);
            return false;
          }
          return true;
        });
    } else if (next.data.roles && !this.auth.hasAnyPermission(next.data.roles)) {
      this.router.navigate(['/nao-autorizado']);
      return false;
    }

    return true;
  }*/

}
