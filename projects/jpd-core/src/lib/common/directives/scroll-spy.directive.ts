import { Directive, ElementRef, HostListener, input, output } from '@angular/core';

export type InOutEvent = 'in' | 'out';

@Directive({
  selector: '[a4wScrollSpy]',
  standalone: true
})
export class ScrollSpyDirective {

  readonly appScrollSpy = input<number>(0);

  readonly reachedEvent = output<InOutEvent>();

  private inEmitted = false;
  private outEmitted = false;

  constructor(private el: ElementRef) {
    console.log('ScrollSpyDirective constructor: ',)
  }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(): void {
    const nativeElement = this.el.nativeElement;
    // todo use 'nativeElement.offsetTop' ?!
    const inside = nativeElement.getBoundingClientRect().top + this.appScrollSpy() <= 0;

    if (!this.inEmitted && inside) {
      this.reachedEvent.emit('in');
      this.inEmitted = true;
      this.outEmitted = false;
      console.log('ScrollSpyDirective in: ',)
    } else if (!this.outEmitted && !inside) {
      this.outEmitted = true;
      this.inEmitted = false;
      this.reachedEvent.emit('out');
      console.log('ScrollSpyDirective out: ',)
    }
  }
}
