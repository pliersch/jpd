import { Directive, ElementRef, OnInit, Renderer2, input } from '@angular/core';

@Directive({
  selector: '[a4wColor]',
  standalone: true
})
export class ColorDirective implements OnInit {

  readonly color = input.required<string>();

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color());
  }
}
