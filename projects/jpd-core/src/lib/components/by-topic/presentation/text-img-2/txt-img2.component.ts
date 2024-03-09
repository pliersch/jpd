import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a4w-txt-img-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './txt-img2.component.html',
  styleUrl: './txt-img2.component.scss'
})
export class TxtImg2Component implements OnInit {

  @Input({transform: booleanAttribute}) circle: boolean;

  @Input({transform: booleanAttribute}) oblique: boolean;

  imgClass = ''

  bg = '1x/21.jpg'

  ngOnInit(): void {
    if (this.circle && this.oblique) {
      throw new Error('Only one property is allowed.')
    }
    if (this.circle) {
      this.imgClass = 'clip-circle'
    }
    if (this.oblique) {
      this.imgClass = 'clip-oblique'
    }
  }

}
