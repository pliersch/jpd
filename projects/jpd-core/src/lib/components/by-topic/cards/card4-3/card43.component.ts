import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FragmentDirective, ImageFallbackDirective } from '../../../../common';
import { TitleSubtitleDescription } from '../../../../content';
import { BaseComponent } from '../../../core/base/base.component';

export interface Card43Model {
  headline: string;
  items: TitleSubtitleDescription[];
}

@Component({
    selector: 'a4w-card43',
    imports: [CommonModule, ImageFallbackDirective, RouterLink],
    templateUrl: './card43.component.html',
    styleUrls: ['./card43.component.scss']
})
export class Card43Component extends BaseComponent<Card43Model> {

  constructor(override fragment?: FragmentDirective) {
    super('Card43', fragment)
  }

}
