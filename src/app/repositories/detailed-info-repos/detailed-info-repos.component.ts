import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repos } from 'src/app/shared/models/Repos';
import { SearhService } from 'src/app/shared/services/searh.service';

@Component({
  selector: 'app-detailed-info-repos',
  templateUrl: './detailed-info-repos.component.html',
  styleUrls: ['./detailed-info-repos.component.scss']
})
export class DetailedInfoReposComponent implements OnInit {
  id: string;
  repositories: Repos[] = [];
  displayRepos: Repos[];
  // like = true;
  isPressed = false;
  count = false;
  countLike;
  getID;
  keyLocaleStorage ;

  // getLike;

  default = true;
  request = false;
  keyword;
  items;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearhService,
  ) {}

  ngOnInit() {

    this.route.params.subscribe(params => (this.id = params.id, this.keyword = params.name));
    this.searchService.getSearchWord().subscribe(searchData => {
    return  this.keyword = searchData;

    });

    this.getAllRepositories(this.keyword, this.id);

  this.getLikeFromLocaleStorage(this.id);

  }

  getAllRepositories(keyword, valId) {

    this.searchService.getSearchData(keyword).subscribe(
      reposData => {
        // tslint:disable-next-line:no-unused-expression
        this.items = reposData.items;
        this.items.map(result => {
          this.repositories.push({
            id: result.id,
            name: result.name,
            owner: result.owner.login,
            owner_url: result.owner.html_url,
            owner_avatar: result.owner.avatar_url,
            html_url: result.html_url,
            created_at: result.created_at,
            pushed_at: result.pushed_at,
            language: result.language,
            description: result.description,
            clone_url: result.clone_url
          });
        });

        this.displayRepos = this.repositories.filter(
          value =>
            // tslint:disable-next-line:no-unused-expression
            value.id.toString() === valId
        );
      },
      err => {
        console.log('error');
      }
    );
  }

  uniqueKey(id) {
    return  this.keyLocaleStorage = id.toString() + '-' + id.toString().slice(-3) + 'git-pro-app';
   }

getLikeFromLocaleStorage(id) {
  const keys = Object.keys(window.localStorage);

  this.getID = keys.filter(key => key === this.uniqueKey(id));

  this.countLike = window.localStorage.getItem(this.getID);
  if (!!this.countLike === true) {
    this.isPressed = true;
    this.count = true;
  }
}
likedRepos(id) {
  window.localStorage.setItem(this.uniqueKey(id) , (++this.countLike).toString());

  this.isPressed = true;
  this.count = true;
}
}
