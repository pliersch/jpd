import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseComponent } from '@lib/components/core/base/base.component';
import { FragmentDirective } from '@lib/common/directives/fragment.directive';

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
