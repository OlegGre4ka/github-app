import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Repos } from '../models/Repos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearhService {
page = 1;
  private searchData$ = new Subject<any>();
  // private inputLogin$ = new Subject<any>();

  constructor(private http: HttpClient) {}

  // setSearchData(keyword: string) {
  //   console.log(keyword, 'keyword отриуємо в сервісі');

  //   this.keyword = keyword;
  // }
  setSearchWord(keyword: string) {
    this.searchData$.next(keyword);

  }

  getSearchWord(): Observable<string> {
    return this.searchData$.asObservable();
  }

  getSearchData(val): Observable<any> {

    return this.http.get<Repos>(

      `https://api.github.com/search/repositories?q=${val}`
    );

}
}
