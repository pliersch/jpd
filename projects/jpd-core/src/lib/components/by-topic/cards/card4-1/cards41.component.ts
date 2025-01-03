import { Component } from '@angular/core';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';
import { Card41Model } from './card41.component';

export interface Cards41Model {
  headline: string;
  cards: Card41Model[]
}

@Component({
  selector: 'a4w-cards41',
  imports: [],
  templateUrl: './cards41.component.html'
})
export class Cards41Component extends BaseComponent<Cards41Model> {

  constructor(override fragment?: FragmentDirective) {
    super('Cards41', fragment);
  }
}
