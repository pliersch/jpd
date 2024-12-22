import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';

export interface AnimationModel {
  landingImg: string;
  animationImg: string;
}

@Component({
    selector: 'a4w-animation-1',
    imports: [CommonModule],
    templateUrl: './animation1.component.html',
    styleUrls: ['./animation1.component.scss']
})
export class Animation1Component extends BaseComponent<AnimationModel> {

  constructor(override fragment?: FragmentDirective) {
    super('Animation1')
  }
}
