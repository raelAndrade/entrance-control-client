import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Locals } from '../models/locals';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalsService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Locals[]>(`${environment.apiUrlLocalsService}`)
      .pipe(tap(console.log));
  }
}
