import { Component, OnInit } from '@angular/core';
import { AuthorListConfig } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  listConfig: AuthorListConfig = new AuthorListConfig();

  ngOnInit() {
  }

}
