import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PosterComponent } from '../../../poster/poster.component';

export interface Card44Model {
  title: string
  imgUrl: string
  linkUrl: string
  linkText: string
  contentText: string
  postContentText?: string
  avatar?: string
}

@Component({
    selector: 'a4w-card44',
    imports: [CommonModule, RouterLink, PosterComponent],
    templateUrl: './card44.component.html',
    styleUrl: './card44.component.scss'
})
export class Card44Component {

  @Input()
  model: Card44Model;

  @Input()
  transparent = false;
}
