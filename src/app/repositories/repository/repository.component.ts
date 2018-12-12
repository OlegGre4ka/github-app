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
  id;
  like = true;
  isPressed = false;
  getLike;
  constructor() {}

  ngOnInit() {}

  likedRepos(id) {
    if (this.isPressed === false) {
      this.isPressed = true;

      window.localStorage.setItem(id.toString(), this.like.toString());
    } else {
      this.isPressed = false;
      window.localStorage.removeItem(id.toString());
    }
  }
}
