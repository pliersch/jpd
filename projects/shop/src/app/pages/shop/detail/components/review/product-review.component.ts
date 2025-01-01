import { Component, inject, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { CommentsComponent } from '@shop/pages/shop/detail/components/review/comments/comments.component';
import { NewReviewDialogComponent } from '@shop/pages/shop/detail/components/review/new-review/new-review-dialog.component';
import { StarRatingComponent } from '@shop/pages/shop/detail/components/review/star-rating/star-rating.component';
import { Article } from '@shop/pages/shop/store/articles/article.model';
import { LoremIpsumFactory, StarsComponent } from 'jpd-core';

@Component({
  selector: 'shop-product-review',
  imports: [StarRatingComponent, StarsComponent, CommentsComponent, MatButton, MatIcon],
  templateUrl: './product-review.component.html',
  styleUrl: './product-review.component.scss',
})
export class ProductReviewComponent {
  readonly article = input.required<Article>();

  dialog: MatDialog = inject(MatDialog);

  writeReview(): void {
    const dialogRef = this.dialog.open(NewReviewDialogComponent, {
      data: {
        userName: 'John Doe',
        title: 'Foobar!',
        message: LoremIpsumFactory.getText(150),
        date: new Date(),
        rating: 5,
      },
      restoreFocus: false,
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log('ProductReviewComponent : ', res);
    });
  }
}
