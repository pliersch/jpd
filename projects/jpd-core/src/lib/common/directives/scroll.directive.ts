import { Directive, HostListener } from '@angular/core';
import { ScrollService } from '../services';

@Directive({
  selector: '[a4wScroll]',
  standalone: true
})
export class ScrollDirective {

  constructor(private scrollService: ScrollService) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    // or this.viewportScroller.getScrollPosition() ???
    this.scrollService.setWindowScrollY(window.scrollY);
  }
}
