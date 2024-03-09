import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardH1Component } from '@lib/components/by-topic/cards/horizontal/card-h-1/card-h-1.component';
import { BaseComponent } from '@lib/components/core/base/base.component';
import { TitleSubtitleDescription } from '@lib/content/content';
import { FragmentDirective } from '@lib/common/directives/fragment.directive';

export interface WaveDesign1Model {
  cards: TitleSubtitleDescription[];
}

@Component({
  selector: 'a4w-wave-design-1',
  standalone: true,
  imports: [CommonModule, CardH1Component],
  templateUrl: './wave-design-1.component.html',
  styleUrl: './wave-design-1.component.scss'
})
export class WaveDesign1Component extends BaseComponent<WaveDesign1Model> {

  constructor(fragment: FragmentDirective) {
    super(fragment);
  }
}
