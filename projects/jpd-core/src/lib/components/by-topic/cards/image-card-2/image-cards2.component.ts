import { Component } from '@angular/core';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';
import { ImageCard2Component, ImageCard2Model } from './image-card2.component';

export interface ImageCards2Model {
  imageCards: ImageCard2Model[]; // 3 items
}

@Component({
    selector: 'a4w-img-cards-2',
    imports: [
        ImageCard2Component
    ],
    templateUrl: './image-cards2.component.html',
    styleUrl: './image-cards2.component.scss'
})
export class ImageCards2Component extends BaseComponent<ImageCards2Model> {

  constructor(override fragment?: FragmentDirective) {
    super('ImageCards2', fragment);
  }
}
