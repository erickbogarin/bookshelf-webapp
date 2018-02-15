import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Author, AppQueryParams, APIResponse } from '../../shared';

@Injectable()
export class AuthorsService {
  constructor(private apiService: ApiService) {}

  fetchAuthors(config: AppQueryParams): Observable<APIResponse<Author>> {
    let params: URLSearchParams = new URLSearchParams();

    Object.keys(config).forEach(key => {
      params.set(key, config[key]);
    });

    return this.apiService.get('/authors', params).map(response => {
      const { results, ...filters } = response;
      return {
        results,
        filters
      };
    });
  }

  save(author): Observable<Author> {
    if (author.id) {
      return this.apiService.put(`/authors/${author.id}/`, author);
    } else {
      return this.apiService.post(`/authors/`, author);
    }
  }

  get(id): Observable<Author> {
    return this.apiService.get(`/authors/${id}`);
  }

  destroy(id) {
    return this.apiService.delete(`/authors/${id}`);
  }
}
