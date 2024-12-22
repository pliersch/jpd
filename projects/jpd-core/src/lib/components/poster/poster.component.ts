import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'a4w-poster',
    imports: [CommonModule],
    templateUrl: './poster.component.html',
    styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  @Input() color: string | undefined;
  @Input() backgroundColor: string | undefined;
  @Input() rounded: string | undefined;

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit(): void {
    if (this.backgroundColor) {
      this.renderer.setStyle(this.el.nativeElement.children[0], 'background-color', this.backgroundColor);
    }
    if (this.color) {
      console.log('PosterComponent input color not implement: ', this.color)
      // this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    }
  }

}
