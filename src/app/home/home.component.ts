import { Component, OnInit } from '@angular/core';
import { AppQueryParams } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  search: string = '';
  listConfig: AppQueryParams = new AppQueryParams();

  ngOnInit() {}
}
