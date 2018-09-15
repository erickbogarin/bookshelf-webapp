import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Author, AuthorsService, AlertService } from '../../../shared';

@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.scss']
})
export class AuthorUpdateComponent implements OnInit {
  author: Author;

  constructor(
    private authorService: AuthorsService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { author: Author }) => {
      this.author = data.author;
    });
  }

  updateAuthor(author: Author) {
    delete author.user.username;
    this.authorService.save(author).subscribe(data => this.onUpdateSuccess(data), err => this.onUpdateError(err));
  }

  onUpdateSuccess(author: Author) {
    this.author = author;
    this.router.navigate(['authors']).then(() => {
      this.alertService.success('Author successfully updated!');
    });
  }

  onUpdateError(err) {
    console.error(err);
    this.alertService.error('Failed to update author!');
  }
}
