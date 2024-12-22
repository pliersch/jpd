import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FragmentDirective } from '../../../../../common';
import { BaseComponent } from '../../../../core/base/base.component';
import { Card44Component, Card44Model } from '../../../cards/card4-4/card44.component';
import { ImageCard1Component, ImageCard1Model } from '../../../cards/image-card-1/image-card1.component';

export interface StoriesGroup1Model {
  cards: Card44Model[];
  imageCard: ImageCard1Model;
}

@Component({
    selector: 'a4w-stories-group-1',
    imports: [CommonModule, Card44Component, ImageCard1Component, MatPaginatorModule],
    templateUrl: './stories-group-1.component.html',
    styleUrl: './stories-group-1.component.scss'
})
export class StoriesGroup1Component extends BaseComponent<StoriesGroup1Model> {

  constructor(override fragment?: FragmentDirective) {
    super('StoriesGroup1', fragment)
  }
}
