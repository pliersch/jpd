import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FragmentDirective, ImageFallbackDirective } from '../../../../common';
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
  standalone: true,
  imports: [CommonModule, ImageFallbackDirective, RouterLink],
  templateUrl: './banner1.component.html',
  styleUrl: './banner1.component.scss'
})
export class Banner1Component extends BaseComponent<Banner1Model> {

  @Input()
  textColor: string;

  @Input()
  color1: string;

  @Input()
  color2: string;

  constructor(override fragment?: FragmentDirective) {
    super('Banner1', fragment)
  }
}
