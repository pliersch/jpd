import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseComponent } from '@lib/components/core/base/base.component';
import { FragmentDirective } from '@lib/common/directives/fragment.directive';

export interface LinkFooterDecoratorModel {
  text: string;
  link: string;
}

@Component({
  selector: 'a4w-link-footer-decorator',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './link-footer-decorator.component.html',
  styleUrl: './link-footer-decorator.component.scss'
})
export class LinkFooterDecoratorComponent extends BaseComponent<LinkFooterDecoratorModel> {

  constructor(override fragment?: FragmentDirective) {
    super(fragment)
  }

}
