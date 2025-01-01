import { Directive, ElementRef, OnInit, Renderer2, input } from '@angular/core';

@Directive({
  selector: '[a4wBackgroundColor]',
  standalone: true
})
export class BackgroundColorDirective implements OnInit {

  readonly backgroundColor = input.required<string>();

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColor());
    // display inline doesn't support background. uncomment next line? check style?
    // this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
  }
}
