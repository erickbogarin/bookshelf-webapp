import { Component, OnInit } from '@angular/core';

import { Author, AuthorsService, AlertService } from '../../../shared';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.scss']
})
export class AuthorCreateComponent implements OnInit {
  author: Author = new Author();
  constructor(
    private authorsService: AuthorsService,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  createAuthor(author: Author) {
    this.authorsService.save(author).subscribe(data => {
      this.alertService.success('Author successfully created!');
    });
  }
}
