import { Component } from '@angular/core';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';
import { PosterComponent } from '../../../poster/poster.component';

export interface LegalModel {
  company: string;
  representation: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
  homepage: string;
  jurisdiction: string;
  taxIdentificationNumber: string;
  disclaimer: string;
  consumerInformation: string;
  infringement: string;
  webDeveloper: string;
  copyright: string;
  references: string;
}

@Component({
    selector: 'a4w-legal-notice-1',
    imports: [
        PosterComponent
    ],
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent extends BaseComponent<LegalModel> {

  constructor(override fragment?: FragmentDirective) {
    super('LegalNotice', fragment)
  }
}
