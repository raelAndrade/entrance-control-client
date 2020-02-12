import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/models/user.model';

import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, router: Router) { }

}
