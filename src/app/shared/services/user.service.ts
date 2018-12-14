import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

   getUser(): Observable<any> {
    return this.http.get<User>(`https://api.github.com/users/OlegGre4ka`);
  }
}
