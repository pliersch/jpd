import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';

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
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card11.component.html',
  styleUrl: './card11.component.scss'
})
export class Card11Component {

  @Input()
  model: Card11Model;

  @Input()
  transparent = false;

  @Input({transform: booleanAttribute})
  imgFirst: boolean;
}
