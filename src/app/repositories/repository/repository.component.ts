import { Component, OnInit, Input } from '@angular/core';
// import { Repos } from '';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('reposItem') repos;
  id;
  like = true;
  isPressed = false;
  getLike ;
  constructor() { }

  ngOnInit() {

  }

  getLikeId() {
    this.repos.map(repos => {this.id = repos.id;
    this.getLike = window.localStorage.getItem(this.id.toString());
  //  this.getLike = window.localStorage.getItem(id);
// console.log( this.getLike, 'getIdLike');
});
  }
  likedRepos(id) {
    if (this.isPressed === false) { this.isPressed = true;
    // this.getLike = window.localStorage.getItem(id.toString());
    // console.log(this.getLike,'getLike from localeStorage');
     window.localStorage.setItem(id.toString(), this.like.toString());
  } else {
    this.isPressed = false;
    window.localStorage.removeItem(id.toString());
  }
}
}
