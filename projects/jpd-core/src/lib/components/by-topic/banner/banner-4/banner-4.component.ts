import { Component } from '@angular/core';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';

export interface Banner4Model {
  title: string;
  message: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  color: string;
  buttonIcon: string;
}

@Component({
  selector: 'a4w-banner-4',
  standalone: true,
  templateUrl: './banner-4.component.html',
  styleUrl: './banner-4.component.scss'
})
export class Banner4Component extends BaseComponent<Banner4Model> {

  constructor(override fragment?: FragmentDirective) {
    super('Banner4', fragment);
  }
}
