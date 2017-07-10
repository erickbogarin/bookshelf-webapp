import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Author, AuthorListConfig } from '../../shared';

@Injectable()
export class AuthorsService {

  constructor(
    private apiService: ApiService
  ) { }

  fetchAuthors(config: AuthorListConfig): Observable<Author[]> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('filter', JSON.stringify(config.filters));

    return this.apiService.get('/authors', params);
  }

  fetchAuthorsCount(): Observable<{ count: number }> {
    return this.apiService.get('/authors/count');
  }

  destroy(id) {
    return this.apiService.delete(`/authors/%{id}`);
  }
}
