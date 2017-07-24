import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SortByService {
  private subject = new Subject<string>();

  constructor() { }

  sortBy(property: string) {
    this.subject.next(property);
  }

  getSortBy(): Observable<any> {
    return this.subject.asObservable();
  }

}
