import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FragmentDirective, ImageFallbackDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';

export interface GridImageModel {
  imgUrl: string;
  link: string;
}

export interface Grid321Model {
  image31: GridImageModel;
  image32: GridImageModel;
  image33: GridImageModel;
  image21: GridImageModel;
  image22: GridImageModel;
}

@Component({
    selector: 'a4w-image-grid321',
    imports: [CommonModule, ImageFallbackDirective, RouterLink],
    templateUrl: './image-grid321.component.html',
    styleUrls: ['./image-grid321.component.scss']
})
export class ImageGrid321Component extends BaseComponent<Grid321Model> {

  constructor(override fragment?: FragmentDirective) {
    super('ImageGrid321', fragment)
  }
}
