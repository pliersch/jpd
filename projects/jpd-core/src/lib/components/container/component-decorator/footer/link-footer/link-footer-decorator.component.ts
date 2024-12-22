import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FragmentDirective } from '../../../../../common';
import { BaseComponent } from '../../../../core/base/base.component';

export interface LinkFooterDecoratorModel {
  text: string;
  link: string;
}

@Component({
    selector: 'a4w-link-footer-decorator',
    imports: [CommonModule, RouterLink],
    templateUrl: './link-footer-decorator.component.html',
    styleUrl: './link-footer-decorator.component.scss'
})
export class LinkFooterDecoratorComponent extends BaseComponent<LinkFooterDecoratorModel> {

  constructor(override fragment?: FragmentDirective) {
    super('LinkFooterDecorator', fragment)
  }

}
