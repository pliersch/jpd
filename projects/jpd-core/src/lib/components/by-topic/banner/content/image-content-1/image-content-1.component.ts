import { Component, numberAttribute, input } from '@angular/core';
import { FragmentDirective } from '../../../../../common';
import { BaseComponent } from '../../../../core/base/base.component';

export interface ImageContent1Model {
  imageUrl: string;
}

@Component({
    selector: 'a4w-image-content-1',
    imports: [],
    templateUrl: './image-content-1.component.html',
    styleUrl: './image-content-1.component.scss'
})
export class ImageContent1Component extends BaseComponent<ImageContent1Model> {

  readonly maxHeight = input.required<number, unknown>({ transform: numberAttribute });

  constructor(override fragment?: FragmentDirective) {
    super('ImageContent1', fragment)
  }
}
