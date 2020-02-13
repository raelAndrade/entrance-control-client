import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(AuthService)
    let tokenizeReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer' + authService.getToken())
      }
    )
    return next.handle(tokenizeReq)
  }
}

