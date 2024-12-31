import { Component, Input } from '@angular/core';

export interface Rating {
  grade: number;
  countPercent: number;
}

@Component({
  selector: 'shop-rating-item',
  imports: [],
  templateUrl: './rating-item.component.html',
  styleUrl: './rating-item.component.scss',
})
export class RatingItemComponent {
  @Input({ required: true })
  value: Rating;
}
