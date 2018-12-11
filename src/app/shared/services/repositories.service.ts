import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(private http: HttpClient) { }
  getRepos(): Observable<any> {
    return this.http.get<Repos>(`https://api.github.com/users/OlegGre4ka/repos`);

  }
}
