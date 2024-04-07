import { Component } from '@angular/core';
import { FragmentDirective } from '../../../../../common';
import { BaseComponent } from '../../../../core/base/base.component';

export interface ContactInfoBoard1Model {
  // backgroundImage: string;
}


@Component({
  selector: 'lib-contact-info-board-1',
  standalone: true,
  imports: [],
  templateUrl: './contact-info-board1.component.html',
  styleUrl: './contact-info-board1.component.scss'
})
export class ContactInfoBoard1Component extends BaseComponent<ContactInfoBoard1Model> {

  constructor(fragment: FragmentDirective) {
    super('ContactInfoBoard1', fragment);
  }
}
