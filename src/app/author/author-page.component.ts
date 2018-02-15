import { Component } from '@angular/core';
import { AppQueryParams } from '../shared';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html'
})
export class AuthorPage {
  search: string = '';
  listConfig: AppQueryParams = new AppQueryParams();
}
