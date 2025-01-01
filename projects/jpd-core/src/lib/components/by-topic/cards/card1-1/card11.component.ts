import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, input } from '@angular/core';

export interface Card11Model {
  title: string
  imgUrl: string
  linkUrl: string
  linkText: string
  contentText: string
  postContentText?: string
  avatar?: string
}

@Component({
    selector: 'a4w-card11',
    imports: [CommonModule],
    templateUrl: './card11.component.html',
    styleUrl: './card11.component.scss'
})
export class Card11Component {

  readonly model = input.required<Card11Model>();

  readonly transparent = input(false);

  readonly imgFirst = input<boolean, unknown>(undefined, { transform: booleanAttribute });
}
