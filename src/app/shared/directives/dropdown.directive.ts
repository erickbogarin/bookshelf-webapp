import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isShow = false;

  constructor(private el: ElementRef) { }

  @HostListener('click')
  toggleShow() {
    this.isShow = !this.isShow;
  }
}
