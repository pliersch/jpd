import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'a4w-txt-img-2',
    imports: [CommonModule],
    templateUrl: './txt-img2.component.html',
    styleUrl: './txt-img2.component.scss'
})
export class TxtImg2Component implements OnInit {

  readonly circle = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  readonly oblique = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  imgClass = ''

  bg = '1x/21.jpg'

  ngOnInit(): void {
    const circle = this.circle();
    const oblique = this.oblique();
    if (circle && oblique) {
      throw new Error('Only one property is allowed.')
    }
    if (circle) {
      this.imgClass = 'clip-circle'
    }
    if (oblique) {
      this.imgClass = 'clip-oblique'
    }
  }

}
