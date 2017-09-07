import { Component } from '@angular/core';
import { AuthorListConfig } from '../shared';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html'
})
export class AuthorPage {
  search: string = '';
  listConfig: AuthorListConfig = new AuthorListConfig();
}
