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
  keyLocaleStorage;
  constructor() {}

  ngOnInit() {
    this.getLikeFromLocaleStorage(this.repos.id);
  }
  uniqueKey(id) {
   return  this.keyLocaleStorage = id.toString() + '-' + id.toString().slice(-3) + 'git-pro-app';
  }
  getLikeFromLocaleStorage(id) {
    const keys = Object.keys(window.localStorage);
    // this.keyLocaleStorage = id.toString() + '-' + id.toString().slice(-3) + 'git-pro-app';

    this.getID = keys.filter(key => key === this.uniqueKey(id));
    this.countLike = window.localStorage.getItem(this.getID);
    if (!!this.countLike === true) {
      this.isPressed = true;
      this.count = true;
    }
  }
  likedRepos(id) {
    this.keyLocaleStorage = id.toString() + '-' + id.toString().slice(-3) + 'git-pro-app';

    window.localStorage.setItem(  this.uniqueKey(id), (++this.countLike).toString());

    this.isPressed = true;
    this.count = true;
  }
}
