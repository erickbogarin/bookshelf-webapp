import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Author, AuthorsService } from '../../../shared'

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
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { author: Author }) => {
        this.author = data.author;
      }
    );
  }

  updateAuthor(author: Author) {
    this.authorService.save(author);
  }

}
