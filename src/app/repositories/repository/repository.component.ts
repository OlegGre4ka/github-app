import { Component, OnInit, Input } from '@angular/core';
import { Repos } from 'src/app/shared/models/Repos';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('reposItem') repos: Repos;
  @Input('keyword') keyword: string;
  id;
  isPressed = false;
  count = false;
  countLike;
  getID;
  constructor() {}

  ngOnInit() {
    this.getLikeFromLocaleStorage(this.repos.id);
  }
  getLikeFromLocaleStorage(id) {
    const keys = Object.keys(window.localStorage);
    this.getID = keys.filter(key => key === id.toString());
    this.countLike = window.localStorage.getItem(this.getID);
    if (!!this.countLike === true) {
      this.isPressed = true;
      this.count = true;
    }
  }
  likedRepos(id) {
    window.localStorage.setItem(id.toString(), (++this.countLike).toString());

    this.isPressed = true;
    this.count = true;
  }
}
