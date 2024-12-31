import { Component } from '@angular/core';
import {
  Rating,
  RatingItemComponent,
} from '@shop/pages/shop/detail/components/review/star-rating/rating-item/rating-item.component';

@Component({
  selector: 'shop-star-rating',
  imports: [RatingItemComponent],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
})
export class StarRatingComponent {
  protected rating: Rating[] = [
    { grade: 1, countPercent: 65 },
    { grade: 2, countPercent: 13 },
    { grade: 3, countPercent: 12 },
    { grade: 4, countPercent: 3 },
    { grade: 5, countPercent: 2 },
  ];
}
