import { Component, Input, OnInit, SimpleChange, OnChanges, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import {
  Author,
  AuthorsService,
  AppQueryParams,
  PaginationService,
  SortByService,
  ModalService,
  AlertService,
  APIResponse
} from '../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit, OnChanges {
  @Input()
  search: string;
  @Input()
  limit: number;
  @Input()
  set config(config: AppQueryParams) {
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
  query: AppQueryParams = {};
  pager: any = {};

  constructor(
    private authorsService: AuthorsService,
    private paginationService: PaginationService,
    private sortByService: SortByService,
    private modalService: ModalService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sortByService.getSortBy().subscribe(property => {
      this.query.ordering = property;
      this.loadAll();
    });
  }

  ngOnChanges(props) {
    if (props['search']) {
      this.onSearchChange();
    }
  }

  onSearchChange() {
    if (this.search && this.search.length > 0) {
      this.query.search = this.search;
      this.query.offset = 0;
      this.pager.currentPage = 1;
    } else {
      this.query.search = '';
    }
    this.loadAll();
  }

  loadAll() {
    this.loading = true;
    this.authors = [];

    if (this.limit) {
      this.query.limit = this.limit;
    }

    this.authorsService.query(this.query).subscribe((data: APIResponse<Author>) => {
      this.authors = data.results;
      this.authorsCount = data.filters.count;
      this.loading = false;
      this.pager = this.paginationService.getPager(this.authorsCount, this.pager.currentPage, this.limit);
    });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.paginationService.getPager(this.authorsCount, page, this.limit);
    this.query.offset = this.limit * (page - 1);
    this.loadAll();
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  deleteAuthor(id: string) {
    this.authorsService.delete(this.authorSelected.id).subscribe(() => {
      this.alertService.success('Author successfully deleted.');
      this.modalService.close(this.authorModalDeleteId);
      this.loadAll();
    });
  }

  onUpdate(author: Author) {
    this.router.navigate(['/authors', author.id, 'update']);
  }

  onDelete(author: Author) {
    this.modalService.open(this.authorModalDeleteId);
    this.authorSelected = author;
  }
}
