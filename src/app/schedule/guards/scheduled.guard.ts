import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/security/auth.service';

@Injectable()
export class ScheduledGuard implements CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean>|boolean {
    return this.verifyAccess();
  }

  private verifyAccess(): boolean {
    if (this.authService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
