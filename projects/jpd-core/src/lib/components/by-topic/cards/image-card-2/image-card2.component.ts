import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ImageCard2Model {
  title: string
  imgUrl: string
  linkUrl: string
  contentText: string
}

@Component({
    selector: 'a4w-image-card2',
    imports: [CommonModule, RouterLink],
    templateUrl: './image-card2.component.html',
    styleUrl: './image-card2.component.scss'
})
export class ImageCard2Component {

  readonly model = input.required<ImageCard2Model>();

  readonly transparent = input(false);
}
