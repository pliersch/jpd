import { Component, Input } from '@angular/core';
import { Comment } from '@shop/pages/shop/store/articles/article.model';
import { StarsComponent } from 'jpd-core';

@Component({
  selector: 'shop-comment',
  imports: [StarsComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input({ required: true })
  comment: Comment;
}
