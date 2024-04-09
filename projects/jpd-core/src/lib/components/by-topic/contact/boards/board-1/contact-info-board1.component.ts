import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FragmentDirective } from '../../../../../common';
import { BaseComponent } from '../../../../core/base/base.component';
import { ContactCompanyInfoComponent } from '../../info/company-info/contact-company-info.component';

export interface ContactInfoBoard1Model {
  companyPicture: string;
}

@Component({
  selector: 'lib-contact-info-board-1',
  standalone: true,
  imports: [
    MatIcon,
    ContactCompanyInfoComponent
  ],
  templateUrl: './contact-info-board1.component.html',
  styleUrl: './contact-info-board1.component.scss'
})
export class ContactInfoBoard1Component extends BaseComponent<ContactInfoBoard1Model> {

  constructor(fragment: FragmentDirective) {
    super('ContactInfoBoard1', fragment);
  }
}
