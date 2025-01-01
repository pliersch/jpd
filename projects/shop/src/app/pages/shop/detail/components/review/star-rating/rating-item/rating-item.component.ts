import { Component, input } from '@angular/core';

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
  readonly value = input.required<Rating>();
}
