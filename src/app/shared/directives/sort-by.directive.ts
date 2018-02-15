import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
  Renderer2,
  Input,
  OnInit
} from '@angular/core';

import { SortByService } from '../services/sort-by.service';

@Directive({
  selector: '[appSortBy]'
})
export class SortByDirective implements OnInit {
  @Input('appSortBy') appSortBy: string;
  @Input() defaultSort = 'fa-sort';
  @Input() sortAsc = 'fa-sort-alpha-asc';
  @Input() sortDesc = 'fa-sort-alpha-desc';

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private sortByService: SortByService
  ) {}

  ngOnInit() {}

  @HostListener('click')
  sort(event: Event) {
    this.removeSortClasses();
    this.addSortClass();
  }

  addSortClass() {
    if (
      this.elRef.nativeElement.className.search(`${this.defaultSort}$`) >= 0
    ) {
      this.renderer.removeClass(this.elRef.nativeElement, this.defaultSort);
      this.renderer.addClass(this.elRef.nativeElement, this.sortAsc);
      this.sortByService.sortBy(`${this.appSortBy}`);
    } else if (
      this.elRef.nativeElement.className.search(`${this.sortAsc}$`) >= 0
    ) {
      this.renderer.removeClass(this.elRef.nativeElement, this.sortAsc);
      this.renderer.addClass(this.elRef.nativeElement, this.sortDesc);
      this.sortByService.sortBy(`-${this.appSortBy}`);
    } else if (
      this.elRef.nativeElement.className.search(`${this.sortDesc}$`) >= 0
    ) {
      this.renderer.removeClass(this.elRef.nativeElement, this.sortDesc);
      this.renderer.addClass(this.elRef.nativeElement, this.defaultSort);
      this.sortByService.sortBy('');
    }
  }

  removeSortClasses() {
    const trElement = this.elRef.nativeElement.parentElement.parentElement;

    for (let i = 0; i < trElement.children.length; i++) {
      if (trElement.children[i] !== this.elRef.nativeElement.parentElement) {
        const sortIcon = trElement.children[i].querySelector('i');
        if (sortIcon && sortIcon.className !== this.defaultSort) {
          this.renderer.removeClass(sortIcon, this.sortAsc);
          this.renderer.removeClass(sortIcon, this.sortDesc);
          this.renderer.addClass(sortIcon, this.defaultSort);
        }
      }
    }
  }
}
