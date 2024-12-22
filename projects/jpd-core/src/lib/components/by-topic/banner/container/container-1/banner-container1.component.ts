import { Component } from '@angular/core';
import { FragmentDirective } from '../../../../../common';
import { BaseComponent } from '../../../../core/base/base.component';

export interface BannerContainer1Model {
  color1: string;
  color2: string;
}

@Component({
    selector: 'a4w-banner-container-1',
    imports: [],
    templateUrl: './banner-container1.component.html',
    styleUrl: './banner-container1.component.scss'
})
export class BannerContainer1Component extends BaseComponent<BannerContainer1Model> {

  constructor(override fragment?: FragmentDirective) {
    super('BannerContainer1', fragment);
  }
}
