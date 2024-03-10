import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FragmentDirective } from '../../../../../common';
import { BaseComponent } from '../../../../core/base/base.component';

export interface TextFooterDecoratorModel {
  text: string;
}

@Component({
  selector: 'a4w-text-footer-decorator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-footer-decorator.component.html',
  styleUrls: ['./text-footer-decorator.component.scss']
})
export class TextFooterDecoratorComponent extends BaseComponent<TextFooterDecoratorModel> {

  constructor(override fragment?: FragmentDirective) {
    super(fragment)
  }

}
