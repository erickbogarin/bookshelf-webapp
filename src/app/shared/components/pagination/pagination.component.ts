import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pager;
  @Output() onSetPage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  setPage(page: number) {
    this.onSetPage.emit(page);
  }
}
