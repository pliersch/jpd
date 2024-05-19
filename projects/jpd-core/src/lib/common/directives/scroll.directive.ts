import { Directive, HostListener } from '@angular/core';
import { PageScrollService } from '../services';

@Directive({
  selector: '[a4wScroll]',
  standalone: true
})
export class ScrollDirective {

  constructor(private scrollService: PageScrollService) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    // or this.viewportScroller.getScrollPosition() ???
    this.scrollService.setWindowScrollY(window.scrollY);
  }
}
