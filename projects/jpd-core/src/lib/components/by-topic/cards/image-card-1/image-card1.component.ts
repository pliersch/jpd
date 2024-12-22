import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ImageCard1Model {
  title: string
  imgUrl: string
  linkUrl: string
  linkText: string
  contentText: string
  postContentTitle?: string
  postContentText?: string
  avatar?: string
}

@Component({
    selector: 'a4w-image-card1',
    imports: [CommonModule, RouterLink],
    templateUrl: './image-card1.component.html',
    styleUrl: './image-card1.component.scss'
})
export class ImageCard1Component {

  @Input()
  model: ImageCard1Model;

  @Input()
  transparent = false;
}
