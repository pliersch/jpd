import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[backgroundColor]',
  standalone: true
})
export class BackgroundColorDirective implements OnInit {

  @Input({required: true})
  backgroundColor: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColor);
    // display inline doesn't support background. uncomment next line? check style?
    // this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
  }
}