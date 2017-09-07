import {
  Component,
  Input,
  OnInit,
  SimpleChange,
  OnChanges,
  ViewChild
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import {
  Author,
  AuthorsService,
  AuthorListConfig,
  PaginationService,
  SortByService,
  ModalService,
  AlertService
} from '../../shared';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.sass']
})
export class AuthorListComponent implements OnInit, OnChanges {
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
  authorsCount = 0;
  authorSelected: Author;
  authorModalDeleteId = 'author-delete-modal';
  loading = false;
  query: AuthorListConfig;
  pager: any = {};

  constructor(
    private authorsService: AuthorsService,
    private paginationService: PaginationService,
    private sortByService: SortByService,
    private modalService: ModalService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.sortByService.getSortBy().subscribe(property => {
      this.query.filters.order = property;
      this.runFetch();
    });
  }

  ngOnChanges(props) {
    if (props['search']) {
      this.onSearchChange();
    }
  }

  onSearchChange() {
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
    } else {
      this.query.filters.where = {};
    }
    this.runFetch();
  }

  runFetch() {
    this.loading = true;
    this.authors = [];

    if (this.limit) {
      this.query.filters.limit = this.limit;
    }

    const authors = this.authorsService.fetchAuthors(this.query);
    const authorsCount = this.authorsService.fetchAuthorsCount(this.query);

    Observable.forkJoin([authors, authorsCount]).subscribe(data => {
      this.authors = data[0];
      this.authorsCount = data[1].count;
      this.loading = false;
      this.pager = this.paginationService.getPager(
        this.authorsCount,
        this.pager.currentPage,
        this.limit
      );
    });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.paginationService.getPager(
      this.authorsCount,
      page,
      this.limit
    );
    this.query.filters.offset = this.limit * (page - 1);
    this.runFetch();
  }

  openModal(id: string, author: Author) {
    this.modalService.open(id);
    this.authorSelected = author;
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  deleteAuthor(id: string) {
    this.authorsService.destroy(this.authorSelected.id).subscribe(() => {
      this.alertService.success('Author successfully deleted.');
      this.modalService.close(this.authorModalDeleteId);
      this.runFetch();
    });
  }
}
