import { Component, OnInit, Input } from "@angular/core";
import { Repos } from "src/app/shared/models/Repos";
@Component({
  selector: "app-repository",
  templateUrl: "./repository.component.html",
  styleUrls: ["./repository.component.scss"]
})
export class RepositoryComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input("reposItem") repos: Repos;
  @Input("keyword") keyword: string;
  id;
  like = 0;
  isPressed = false;
  countLike;
  // idLocalStorageArray = [];
  setID;
  // setCountLike;
  // likeObj = {};
  // objKeysInStorage = [];
  getID;
  constructor() {}

  ngOnInit() {
    console.log(this.repos.id, 'repos.id');

    this.getLikeFromLocaleStorage(this.repos.id);

    // const keys = Object.keys(window.localStorage);
    // // this.likedRepos(this.id, keys);
    // console.log(keys);
    // this.getID =  keys.filter(key => key === '13261856');
    // this.countLike = window.localStorage.getItem(this.getID);
    // console.log(this.getID, this.countLike , 'IDget');

    // if (

    // ) {

    // }
  }
  getLikeFromLocaleStorage(id) {
    const keys = Object.keys(window.localStorage);
    // this.likedRepos(this.id, keys);
    console.log(keys);
    this.getID = keys.filter(key => key === id.toString());
    this.countLike = window.localStorage.getItem(this.getID);
    console.log(this.getID, this.countLike, "IDget");
    if ( !!this.countLike === true) {
    this.isPressed = true;
    }
  }
  likedRepos(id) {
    // this.countLike =  (++this.like).toString();

    // window.localStorage.setItem(id.toString(), this.countLike);
    window.localStorage.setItem(id.toString(), (++this.like).toString());

      this.isPressed = true;

  }
}
