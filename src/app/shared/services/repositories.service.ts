import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repos } from '../models/Repos';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  login = '';
  constructor(private http: HttpClient) {}
  setInputLogin(login: string) {
    return (this.login = login);
  }
  getRepos(): Observable<any> {
    return this.http.get<Repos>(
      `https://api.github.com/users/${this.login}/repos`
    );
  }
}
