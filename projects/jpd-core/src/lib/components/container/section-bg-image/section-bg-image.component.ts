import { Component, input } from '@angular/core';
import { FragmentDirective } from '../../../common';
import { BaseComponent } from '../../core/base/base.component';

export interface BgImageModel {
  backgroundImage: string;
}

@Component({
  selector: 'a4w-section-bg-image',
  templateUrl: './section-bg-image.component.html',
  styleUrls: ['./section-bg-image.component.scss'],
  standalone: true,
})

export class SectionBgImageComponent extends BaseComponent<BgImageModel> {

  readonly darkenBG = input(true);

  constructor(override fragment?: FragmentDirective) {
    super('SectionBgImage', fragment);
  }

}
