import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, input } from '@angular/core';

@Component({
    selector: 'a4w-poster',
    imports: [CommonModule],
    templateUrl: './poster.component.html',
    styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  readonly color = input<string>();
  readonly backgroundColor = input<string>();
  readonly rounded = input<string>();

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit(): void {
    const backgroundColor = this.backgroundColor();
    if (backgroundColor) {
      this.renderer.setStyle(this.el.nativeElement.children[0], 'background-color', backgroundColor);
    }
    const color = this.color();
    if (color) {
      console.log('PosterComponent input color not implement: ', color)
      // this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    }
  }

}
