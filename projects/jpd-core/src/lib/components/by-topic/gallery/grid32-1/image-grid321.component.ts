import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseComponent } from '@lib/components/core/base/base.component';
import { FragmentDirective } from '@lib/common/directives/fragment.directive';
import { ImageFallbackDirective } from '@lib/common/directives/image-fallback-directive';

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
  standalone: true,
  imports: [CommonModule, ImageFallbackDirective, RouterLink],
  templateUrl: './image-grid321.component.html',
  styleUrls: ['./image-grid321.component.scss']
})
export class ImageGrid321Component extends BaseComponent<Grid321Model> {

  constructor(override fragment?: FragmentDirective) {
    super(fragment)
  }
}
