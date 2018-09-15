import { Component, OnInit } from '@angular/core';

import { Author, AuthorsService, AlertService } from '../../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.scss']
})
export class AuthorCreateComponent implements OnInit {
  author: Author = new Author();

  constructor(private authorsService: AuthorsService, private alertService: AlertService, private router: Router) {}

  ngOnInit() {}

  createAuthor(author: Author) {
    this.authorsService.save(author).subscribe(data => this.onSaveSuccess(data), err => this.onSaveError(err));
  }

  onSaveSuccess(author: Author) {
    this.router.navigate(['authors']).then(() => {
      this.alertService.success('Author successfully created!');
    });
  }

  onSaveError(err) {
    console.error(err);
    this.alertService.error('Failed to save author!');
  }
}
