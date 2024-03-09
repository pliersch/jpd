import { Component } from '@angular/core';
import { ImageFallbackDirective } from '@lib/common';
import { BackActionComponent, Parallax1Component, PosterComponent } from '@lib/components';
import { LoremIpsumFactory } from '@lib/content';

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
