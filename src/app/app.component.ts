import { Component, OnInit } from '@angular/core';
import { SearhService } from './shared/services/searh.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  splashscreen = true;
  navbar = false;
  keyword = '' ;
  gitLogin = '';
  constructor(
    private searhService: SearhService,
    private router: Router


  ) {}
  ngOnInit() {
    setTimeout(() => {
      this.splashscreen = false;
      this.navbar = true;
    }, 3000);

  }

    search(keyword ) {

      this.keyword = keyword;

  this.searhService.setSearchWord(this.keyword);
  this.router.navigate(['repositories']);

    this.keyword = '';


  }
}
