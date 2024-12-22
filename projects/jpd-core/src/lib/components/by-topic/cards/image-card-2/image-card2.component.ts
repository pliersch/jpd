import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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

  @Input()
  model: ImageCard2Model;

  @Input()
  transparent = false;
}
