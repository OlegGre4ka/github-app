import { Component, OnInit } from '@angular/core';
import { SearhService } from './shared/services/searh.service';
import { RepositoriesService } from './shared/services/repositories.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  splashscreen = true;
  navbar = false;
  keyWord = '';
  gitLogin = '';
  constructor(
    private searhService: SearhService,
    private reposService: RepositoriesService,
    private userService: UserService
  ) {}
  ngOnInit() {}
  inputLogin(inputLogin) {
    if (inputLogin === '') {
      this.gitLogin = 'OlegGre4ka';
    } else {
      this.gitLogin = inputLogin;
    }
    this.reposService.setInputLogin(this.gitLogin);
    this.userService.setInputLogin(this.gitLogin);

    this.splashscreen = false;
    this.navbar = true;
  }
  search() {
    this.searhService.setSearchData(this.keyWord);
    this.keyWord = '';
  }
}
