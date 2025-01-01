import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';

export interface Banner1Model {
  title: string;
  subtitle: string;
  contentText: string;
  postContentText: string;
  imageUrl: string
  linkText: string
  linkUrl: string
}

@Component({
  selector: 'a4w-banner-1',
  imports: [CommonModule, RouterLink, MatIcon],
  templateUrl: './banner1.component.html',
  styleUrl: './banner1.component.scss'
})
export class Banner1Component extends BaseComponent<Banner1Model> {

  readonly textColor = input<string>();

  readonly color1 = input<string>();

  readonly color2 = input<string>();

  constructor(override fragment?: FragmentDirective) {
    super('Banner1', fragment)
  }
}
