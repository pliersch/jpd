import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { BreakpointService, Dimension, FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';
import { Card11Component, Card11Model } from '../../cards/card1-1/card11.component';
import { ImageCard1Component, ImageCard1Model } from '../../cards/image-card-1/image-card1.component';
import { ImageCard2Component } from '../../cards/image-card-2/image-card2.component';

export interface StoriesGroup1Model {
  cards: Card11Model[]; // 2 items
  imageCards: ImageCard1Model[]; // 3 items
}

@Component({
    selector: 'a4w-presentation-cards-1',
    imports: [
        ImageCard1Component,
        Card11Component,
        ImageCard2Component
    ],
    templateUrl: './presentation-cards1.component.html'
})
export class PresentationCards1Component extends BaseComponent<StoriesGroup1Model> {

  isSmall: Signal<boolean | undefined>;

  constructor(private breakpointService: BreakpointService,
              override fragment?: FragmentDirective) {
    super('CardPresentation1', fragment);
    this.isSmall = toSignal(this.breakpointService.dimension$.pipe(
      map(dimension =>
        dimension === Dimension.XSmall
        || dimension === Dimension.Small
        || dimension === Dimension.Medium)));
  }
}
