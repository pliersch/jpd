import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FragmentDirective } from '../../../../common';
import { TitleSubtitleDescription } from '../../../../content';
import { BaseComponent } from '../../../core/base/base.component';
import { CardH1Component } from '../../cards/card-h-1/card-h-1.component';

export interface WaveDesign1Model {
  cards: TitleSubtitleDescription[];
}

@Component({
    selector: 'a4w-wave-design-1',
    imports: [CommonModule, CardH1Component],
    templateUrl: './wave-design-1.component.html',
    styleUrl: './wave-design-1.component.scss'
})
export class WaveDesign1Component extends BaseComponent<WaveDesign1Model> {

  constructor(fragment: FragmentDirective) {
    super('WaveDesign1', fragment);
  }
}
