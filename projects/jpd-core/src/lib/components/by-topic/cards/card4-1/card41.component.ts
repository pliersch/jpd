import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FragmentDirective } from '../../../../common';
import { TitleSubtitleDescription } from '../../../../content';
import { BaseComponent } from '../../../core/base/base.component';

export interface Card41Model {
  headline: string;
  items: TitleSubtitleDescription[]
}

@Component({
  selector: 'a4w-card41',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card41.component.html',
  styleUrls: ['./card41.component.scss']
})
export class Card41Component extends BaseComponent<Card41Model> {

  constructor(override fragment?: FragmentDirective) {
    super(fragment)
  }

}
