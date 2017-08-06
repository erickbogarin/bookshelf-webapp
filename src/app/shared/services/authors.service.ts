import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Author, AuthorListConfig } from '../../shared';

@Injectable()
export class AuthorsService {
  constructor(private apiService: ApiService) {}

  fetchAuthors(config: AuthorListConfig): Observable<Author[]> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('filter', JSON.stringify(config.filters));

    return this.apiService.get('/authors', params);
  }

  fetchAuthorsCount(config: AuthorListConfig): Observable<{ count: number }> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('where', JSON.stringify(config.filters.where));

    return this.apiService.get('/authors/count', params);
  }

  save(author): Observable<Author> {
    if (author.id) {
      return this.apiService.put(`/authors/${author.id}`, author);
    } else {
      return this.apiService.post(`/authors`, author);
    }
  }

  get(id): Observable<Author> {
    return this.apiService.get(`/authors/${id}`);
  }

  destroy(id) {
    return this.apiService.delete(`/authors/${id}`);
  }
}
