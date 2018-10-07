import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Author } from '../../shared';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss']
})
export class AuthorItemComponent implements OnInit {
  @Input()
  author: Author;
  @Output()
  onUpdate: EventEmitter<Author> = new EventEmitter();
  @Output()
  onDelete: EventEmitter<Author> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleUpdate(author: Author) {
    this.onUpdate.emit(author);
  }

  handleDelete(author: Author) {
    this.onDelete.emit(author);
  }
}
