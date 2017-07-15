import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Author, AuthorsService } from '../shared';

@Injectable()
export class AuthorResolver implements Resolve<Author> {
  constructor(
    private router: Router,
    private authorService: AuthorsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.authorService.get(route.params['id'])
      .catch((err) => this.router.navigateByUrl('/'));
  }
}
