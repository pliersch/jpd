import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[color]',
  standalone: true
})
export class ColorDirective implements OnInit {

  @Input({required: true})
  color: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
  }
}
