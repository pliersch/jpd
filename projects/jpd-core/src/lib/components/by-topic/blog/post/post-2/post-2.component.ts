import { Component } from '@angular/core';
import { ImageFallbackDirective } from '../../../../../common';
import { LoremIpsumFactory } from '../../../../../content';
import { BackActionComponent } from '../../../../actions/back/back-action.component';
import { Parallax1Component } from '../../../../container/parallax/parallax-1/parallax1.component';
import { PosterComponent } from '../../../../poster/poster.component';

@Component({
  selector: 'a4w-post-2',
  standalone: true,
  imports: [
    ImageFallbackDirective,
    Parallax1Component,
    PosterComponent,
    BackActionComponent
  ],
  templateUrl: './post-2.component.html',
  styleUrl: './post-2.component.scss'
})
export class Post2Component {
  images =
    ['assets/img/1x/2.jpg',
      'assets/img/1x/10.jpg',
      'assets/img/1x/11.jpg',
      'assets/img/1x/7.jpg'];

  txt1 = LoremIpsumFactory.getText(300);
  txt2 = LoremIpsumFactory.getText(250);
  txt3 = LoremIpsumFactory.getText(250);
  txt4 = LoremIpsumFactory.getText(100);

}
