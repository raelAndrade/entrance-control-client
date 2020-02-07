import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from './user.api';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(`${API}/login/`, user);
  }

  createOrUpdate(user: User) {
    if (user.id != null && user.id !== '') {
      return this.http.put(`${API}/users`, user);
    } else {
      user.id = null;
      return this.http.post(`${API}/users`, user);
    }
  }

  findAll(page: number, count: number) {
    return this.http.get(`${API}/users/${page}/${count}`);
  }

  findById(id: string) {
    return this.http.get(`${API}/users/${id}`);
  }

  delete(id: string) {
    return this.http.delete(`${API}/users/${id}`);
  }

}
