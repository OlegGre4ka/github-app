import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../shared/services/repositories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  renderedSpinner = true;
  repositories: Repos[] = [];
  displayRepos: Repos[];
  keyWord = '';
  isShowAlert = false;
  backToFullList = false;
  constructor(private reposService: RepositoriesService, private router: Router) {}

  ngOnInit() {
    // if ( this.router.navigate(['/repositories']) ) {
    //   this.repository = true;
    // } else if (this.router.navigate(['/repositories/id']) ) {
    //   this.repository = false;
    //   this.detailedInfo = true;
    // }
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
      // return repos.name.toLowerCase().indexOf(this.keyWord.toLowerCase().trim()) !== -1;
    });
    if (this.displayRepos.length === 0) {
      this.alertNoFilm();
      this.backToFullList = false;
    } else {
      this.backToFullList = true;
    }
    this.keyWord = '';
  }

  goBackToFullList() {
    this.backToFullList = false;
    this.displayRepos = [...this.repositories];

  }
}
