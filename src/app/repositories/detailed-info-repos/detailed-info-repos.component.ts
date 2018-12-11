import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoriesService } from 'src/app/shared/services/repositories.service';

@Component({
  selector: 'app-detailed-info-repos',
  templateUrl: './detailed-info-repos.component.html',
  styleUrls: ['./detailed-info-repos.component.scss']
})
export class DetailedInfoReposComponent implements OnInit {
id: string;
// renderedSpinner = true;
repositories: Repos[] = [];
displayRepos: Repos[];
like = true;
isPressed = false;
getLike ;

// tslint:disable-next-line:no-input-rename
@Input ('reposDetailed') repos;

  constructor(private route: ActivatedRoute, private reposService: RepositoriesService ) { }

  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => this.id = params.id);
    console.log(this.id, 'id from params');
    this.getAllRepositories(this.id);
    console.log(this.id, 'id from getAllRepos');

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
    // this.getLike = window.localStorage.getItem(id.toString());
    // console.log(this.getLike,'getLike from localeStorage');
     window.localStorage.setItem(id.toString(), this.like.toString());
  } else {
    this.isPressed = false;
    window.localStorage.removeItem(id.toString());
  }
}
}
