import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Administrations } from '../models/admin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdmService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Administrations[]>(`${environment.apiUrlAdministration}/administrations`)
      .pipe(tap(console.log));
  }
}
