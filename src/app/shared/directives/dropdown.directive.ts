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

  button: Element;
  dropdownMenu: Element;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.button = this.el.nativeElement.children[0];
    this.dropdownMenu = this.el.nativeElement.children[1];
  }

  @HostListener('click', ['$event.target'])
  toggleShow(targetElement) {
    if (targetElement == this.button || this.button.contains(targetElement)) {
      if (this.isShow) {
        this.closeDropdrownMenu();
      } else {
        this.openDropdownMenu();
      }
    }
  }

  @HostListener('document:click', ['$event.target'])
  public onPageClick(targetElement): void {
    const clickedInside = this.el.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.closeDropdrownMenu();
    }
  }

  private openDropdownMenu() {
    this.isShow = true;
    this.renderer.addClass(this.dropdownMenu, 'show');
  }

  private closeDropdrownMenu() {
    this.isShow = false;
    this.renderer.removeClass(this.dropdownMenu, 'show');
  }
}
