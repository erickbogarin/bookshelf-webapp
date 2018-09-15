import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../../shared';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent implements OnInit {
  @Input('author')
  author: Author = {
    id: null,
    bio: '',
    image: '',
    user: {
      username: null,
      first_name: null,
      last_name: null
    }
  };
  @Output('onSubmited')
  onSubmited = new EventEmitter<Author>();

  constructor() {}

  ngOnInit() {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.onSubmited.emit(this.author);
  }
}
