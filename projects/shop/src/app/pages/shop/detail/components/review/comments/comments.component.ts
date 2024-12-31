import { Component } from '@angular/core';
import { CommentComponent } from '@shop/pages/shop/detail/components/review/comments/comment/comment.component';
import { Comment } from '@shop/pages/shop/store/articles/article.model';
import { LoremIpsumFactory } from 'jpd-core';

@Component({
  selector: 'shop-comments',
  imports: [CommentComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  comments: Comment[] = [
    { userName: 'John Doe', title: 'Foobar!', message: LoremIpsumFactory.getText(150), date: new Date(), rating: 5 },
    { userName: 'John Doe', title: 'Foobar!', message: LoremIpsumFactory.getText(150), date: new Date(), rating: 4 },
    { userName: 'John Doe', title: 'Foobar!', message: LoremIpsumFactory.getText(150), date: new Date(), rating: 5 },
    { userName: 'John Doe', title: 'Foobar!', message: LoremIpsumFactory.getText(150), date: new Date(), rating: 3 },
  ];
}
