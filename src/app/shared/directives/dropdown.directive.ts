import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isShow = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  toggleShow() {
    this.isShow = !this.isShow;
    const dropdownMenu = this.el.nativeElement.querySelector('.dropdown-menu');
    if (this.isShow) {
      this.renderer.addClass(dropdownMenu, 'show');
    } else {
      this.renderer.removeClass(dropdownMenu, 'show');
    }
  }
}
