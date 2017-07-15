import { Component, OnInit } from '@angular/core';

import { Author, AuthorsService } from '../../../shared';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.scss']
})
export class AuthorCreateComponent implements OnInit {

  constructor(
    private authorsService: AuthorsService
  ) { }

  ngOnInit() {
  }

  createAuthor(author: Author) {
    this.authorsService.save(author);
  }

}
