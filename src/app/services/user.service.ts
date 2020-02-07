import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from './helpdesk.api';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(`${API}/api/auth`, user);
  }

  createOrUpdate(user: User) {
    if (user.id != null && user.id !== '') {
      return this.http.put(`${API}/api/user`, user);
    } else {
      user.id = null;
      return this.http.post(`${API}/api/user`, user);
    }
  }

  findAll(page: number, count: number) {
    return this.http.get(`${API}/api/user/${page}/${count}`);
  }

  findById(id: string) {
    return this.http.get(`${API}/api/user/${id}`);
  }

  delete(id: string) {
    return this.http.delete(`${API}/api/user/${id}`);
  }

}
