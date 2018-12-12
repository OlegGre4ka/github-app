import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  login = '';
  constructor(private http: HttpClient) {}
  setInputLogin(login: string) {

    return (this.login = login);
  }
  getUser(): Observable<any> {
    return this.http.get<User>(`https://api.github.com/users/${this.login}`);
  }
}
