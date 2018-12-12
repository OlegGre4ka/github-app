import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearhService {
  private searchData$ = new Subject<any>();
  private inputLogin$ = new Subject<any>();

  constructor() {}

  setSearchData(searchData: string) {
    this.searchData$.next(searchData);
  }

  getSearchData(): Observable<string> {
    return this.searchData$.asObservable();
  }
}
