import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  splashscreen = true;
  navbar = false;

  ngOnInit() {
    setTimeout(() => {
      this.splashscreen = false;
      this.navbar = true;
    }, 3000);
  }
}
