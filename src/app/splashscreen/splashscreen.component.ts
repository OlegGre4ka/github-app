import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.scss']
})
export class SplashscreenComponent implements OnInit {
  title = 'GitHub App';
  constructor() {}

  ngOnInit() {}

}
