import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[a4wScrollSpy]',
  standalone: true
})
export class ScrollSpyDirective {

  @Input() appScrollSpy: number = 0;

  @Output() reachedEvent: EventEmitter<string> = new EventEmitter();

  private inEmitted = false;
  private outEmitted = false;

  constructor(private el: ElementRef) {
    console.log('ScrollSpyDirective constructor: ',)
  }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(): void {
    const nativeElement = this.el.nativeElement;
    // todo use 'nativeElement.offsetTop' ?!
    const inside = nativeElement.getBoundingClientRect().top + this.appScrollSpy <= 0;

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
