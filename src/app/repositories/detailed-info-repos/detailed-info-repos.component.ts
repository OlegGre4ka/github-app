import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoriesService } from 'src/app/shared/services/repositories.service';
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
like = true;
isPressed = false;
getLike ;

  constructor(private route: ActivatedRoute,
     private reposService: RepositoriesService, private searchService: SearhService  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params.id);

    this.getAllRepositories(this.id);

  }
  getAllRepositories(val) {
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
        });
        console.log(this.repositories, 'repos');

      this.displayRepos = this.repositories.filter(
        value =>
            // tslint:disable-next-line:no-unused-expression
            value.id.toString() === val
        );
        console.log(this.displayRepos, 'display array finish');

        },
        err => {
          console.log('error');
        }
      );
  }

  likedRepos(id) {
    if (this.isPressed === false) { this.isPressed = true;
     window.localStorage.setItem(id.toString(), this.like.toString());
  } else {
    this.isPressed = false;
    window.localStorage.removeItem(id.toString());
  }
}
}
