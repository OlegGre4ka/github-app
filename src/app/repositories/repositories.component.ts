import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repos } from '../shared/models/Repos';
import { SearhService } from '../shared/services/searh.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  renderedSpinner = true;
  textMessage;
  items = [];
  repositories: Repos[] = [];
  displayRepos: Repos[];
  total_count;
  default = true;
  request = false;
  keyword = 'yii2';
  // keyword = '';

  page = 1;
  isShowAlert = false;
  backToFullList = false;
  constructor(
    private searchService: SearhService
  ) {}

  ngOnInit() {
    this.searchService.getSearchWord().subscribe(searchData => {
      this.keyword = searchData;
      this.default = false;
      this.request = true;

      this.getAllRepositories(this.keyword);

      if (this.keyword === '') {
          this.alertNoFilm();

      }

    });
      this.getAllRepositories(this.keyword);

  }

  getAllRepositories(keyword) {

    this.repositories = [];
    this.searchService.getSearchData(keyword).subscribe(
      reposData => {
        this.total_count = reposData.total_count;
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

        // Роблю копію і далі працюю з копією
        this.displayRepos = [...this.repositories];
        this.renderedSpinner = false;
        if (this.displayRepos.length === 0 || this.keyword === '') {
          this.alertNoFilm();
        }

      },
      err => {
        console.log('error');
      }
    );
  }

  alertNoFilm() {
    this.isShowAlert = true;
    if (this.keyword === '') {
      this.textMessage = 'Input, please, keyword for search!';
    } else {
      this.textMessage = 'The repository with such a name is not found';
    }
    setTimeout(() => {
      this.isShowAlert = false;
      this.displayRepos = [...this.repositories];
    }, 2000);
  }


}
