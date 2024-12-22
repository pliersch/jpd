import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';

export interface Banner3Model {
  title: string;
  contentText: string;
  postContentText: string,
  imageUrl: string
  linkText: string
  linkUrl: string
}

@Component({
    selector: 'a4w-banner-3',
    imports: [CommonModule, MatButtonModule],
    templateUrl: './banner3.component.html',
    styleUrl: './banner3.component.scss'
})
export class Banner3Component extends BaseComponent<Banner3Model> {

  constructor(override fragment?: FragmentDirective) {
    super('Banner3', fragment)
  }
}
