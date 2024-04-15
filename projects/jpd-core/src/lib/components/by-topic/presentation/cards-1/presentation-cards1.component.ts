import { Component } from '@angular/core';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';
import { Card11Component, Card11Model } from '../../cards/card1-1/card11.component';
import { ImageCard1Component, ImageCard1Model } from '../../cards/image-card-1/image-card1.component';

export interface StoriesGroup1Model {
  cards: Card11Model[]; // 2 items
  imageCards: ImageCard1Model[]; // 3 items
}

@Component({
  selector: 'a4w-presentation-cards-1',
  standalone: true,
  imports: [
    ImageCard1Component,
    Card11Component
  ],
  templateUrl: './presentation-cards1.component.html',
  styleUrl: './presentation-cards1.component.scss'
})
export class PresentationCards1Component extends BaseComponent<StoriesGroup1Model> {

  constructor(override fragment?: FragmentDirective) {
    super('CardPresentation1', fragment);
  }
}
