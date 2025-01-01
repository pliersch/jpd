import { Component, input } from '@angular/core';
import { Comment } from '@shop/pages/shop/store/articles/article.model';
import { StarsComponent } from 'jpd-core';

@Component({
  selector: 'shop-comment',
  imports: [StarsComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  readonly comment = input.required<Comment>();
}
