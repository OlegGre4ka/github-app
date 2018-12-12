import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../shared/services/repositories.service';
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
  repositories: Repos[] = [];
  displayRepos: Repos[];
  keyWord = '';
  isShowAlert = false;
  backToFullList = false;
  constructor(
    private reposService: RepositoriesService,
    private router: Router,
    private searchService: SearhService
  ) {}

  ngOnInit() {
    this.searchService.getSearchData().subscribe(searchData => {
      this.keyWord = searchData;
      console.log(this.keyWord, 'keyword in repositoriesComponent');

      this.search();
    });
    this.getAllRepositories();
  }

  getAllRepositories() {
    this.reposService.getRepos().subscribe(reposData => {
      reposData.map(
        result => {
          this.repositories.push({
            id: result.id,
            name: result.name,
            html_url: result.html_url,
            created_at: result.created_at,
            pushed_at: result.pushed_at,
            language: result.language,
            description: result.description,
            clone_url: result.clone_url
          });
          // Роблю копію і далі працюю з копією
          this.displayRepos = [...this.repositories];
          this.renderedSpinner = false;
        },
        err => {
          console.log('error');
        }
      );
    });
  }

  alertNoFilm() {
    this.isShowAlert = true;
    if (this.keyWord === '') {
      this.textMessage = 'Input, please, keyword for search!';
    } else {
      this.textMessage = 'The repository with such a name is not found';
    }
    setTimeout(() => {
      this.isShowAlert = false;
      this.displayRepos = [...this.repositories];
    }, 2000);
  }
  search() {
    this.displayRepos = this.repositories.filter(repos => {
      return repos.name
        .toLowerCase()
        .includes(this.keyWord.toLowerCase().trim());
    });
    if (this.displayRepos.length === 0 || this.keyWord === '') {
      this.alertNoFilm();
      this.backToFullList = false;
    } else {
      this.backToFullList = true;
    }
  }

  goBackToFullList() {
    this.backToFullList = false;
    this.displayRepos = [...this.repositories];
  }
}
