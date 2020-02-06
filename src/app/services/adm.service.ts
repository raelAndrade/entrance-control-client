import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Administrations } from '../models/adm-list';

@Injectable({
  providedIn: 'root'
})
export class AdmService {

  private readonly API = 'http://localhost:3001/administrations';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Administrations[]>(this.API)
      .pipe(tap(console.log));
  }
}
