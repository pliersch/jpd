import { Component } from '@angular/core';
import { FragmentDirective } from '../../../../../common';
import { BaseComponent } from '../../../../core/base/base.component';

export interface TextContent1Model {
  title: string;
  message: string;
  description: string;
}

@Component({
    selector: 'a4w-text-content-1',
    imports: [],
    templateUrl: './text-content-1.component.html',
    styleUrl: './text-content-1.component.scss'
})
export class TextContent1Component extends BaseComponent<TextContent1Model> {

  constructor(override fragment?: FragmentDirective) {
    super('TextContent1', fragment)
  }
}
