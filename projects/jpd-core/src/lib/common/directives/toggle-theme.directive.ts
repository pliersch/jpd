import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[a4wThemeToggle]',
  standalone: true
})
export class ToggleThemeDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    // read style and set display block only if current is inline not possible
    // styles are available after view init
    renderer.addClass(el.nativeElement, 'block')
    renderer.addClass(el.nativeElement, 'theme-toggle')
  }

}
