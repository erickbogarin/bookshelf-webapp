import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';
import { Author, AppQueryParams, APIResponse } from '../../shared';

@Injectable()
export class AuthorsService {
  private readonly RESOURCE_URL = '/authors';

  constructor(private apiService: ApiService) {}

  query(config: AppQueryParams): Observable<APIResponse<Author>> {
    const params: URLSearchParams = new URLSearchParams();

    Object.keys(config).forEach(key => {
      params.set(key, config[key]);
    });

    return this.apiService.get(`${this.RESOURCE_URL}`, params).map(response => {
      const { results, ...filters } = response;
      return {
        results,
        filters
      };
    });
  }

  find(id): Observable<Author> {
    return this.apiService.get(`${this.RESOURCE_URL}/${id}`);
  }

  save(author): Observable<Author> {
    if (author.id) {
      return this.apiService.put(`${this.RESOURCE_URL}/${author.id}/`, author);
    } else {
      return this.apiService.post(`${this.RESOURCE_URL}/`, author);
    }
  }

  delete(id) {
    return this.apiService.delete(`${this.RESOURCE_URL}/${id}`);
  }
}
