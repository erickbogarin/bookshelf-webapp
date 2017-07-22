import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import {
  Author,
  AuthorsService,
  AuthorListConfig,
  PaginationService
} from '../../shared';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.sass']
})
export class AuthorListComponent {
  @Input() search: string;
  @Input() limit: number;
  @Input()
  set config(config: AuthorListConfig) {
    if (config) {
       this.query = config;
       this.pager.currentPage = 1;
    }
  }

  authors: Author[];
  authorsCount: number = 0;
  loading = false;
  query: AuthorListConfig;
  pager: any = {};

  constructor(
    private authorsService: AuthorsService,
    private paginationService: PaginationService
  ) { }

  ngOnChanges(props: SimpleChange) {
    if (props['search']) {
      this.runFetch();
    }
  }
  runFetch() {
    this.loading = true;
    this.authors = [];

    this.checkSearchInput();

    if (this.limit) {
      this.query.filters.limit = this.limit;
    }

    const authors = this.authorsService.fetchAuthors(this.query);
    const authorsCount = this.authorsService.fetchAuthorsCount(this.query);

    Observable.forkJoin([authors, authorsCount])
      .subscribe(data => {
        this.authors = data[0]
        this.authorsCount = data[1].count;
        this.loading = false;
        this.pager = this.paginationService.getPager(this.authorsCount, this.pager.currentPage, this.limit);
      });
  }

  checkSearchInput() {
    if (this.search && this.search.length > 0) {
      this.query.filters.where = {
        or: [
          {
            firstName: {
              ilike: this.search
            }
          },
          {
            lastName: {
              ilike: this.search
            }
          }
        ]
      };
      this.query.filters.offset = 0;
      this.pager.currentPage = 1;
    }
    else {
      this.query.filters.where = {}
    }
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.paginationService.getPager(this.authorsCount, page, this.limit);
    this.query.filters.offset = this.limit * (page - 1);
    this.runFetch();
  }
}
