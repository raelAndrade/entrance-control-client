import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Locals } from '../models/locals';

@Injectable({
  providedIn: 'root'
})
export class LocalsService {

  private readonly API = 'http://localhost:3000/locals';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Locals[]>(this.API)
      .pipe(tap(console.log));
  }
}
