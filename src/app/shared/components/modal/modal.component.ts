import { Component, ElementRef, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  encapsulation: ViewEncapsulation.None,
  template: '<ng-content></ng-content>'
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: JQuery;

  constructor(
    private modalService: ModalService,
    private el: ElementRef
  ) {
    this.element = $(el.nativeElement);
  }

  ngOnInit(): void {
    let modal = this;

    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    this.element.appendTo('body');

    this.element.on('click', function (e: any) {
          var target = $(e.target);
          if (!target.closest('.modal-dialog').length) {
              modal.close();
          }
      });

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.show('fast');
    this.element.addClass('show');
    var backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show';
    $(backdrop).appendTo(document.body);
    $('body').addClass('modal-open');
  }


  close(): void {
    this.element.hide();
    this.element.removeClass('show');
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open');
  }
}
