import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FragmentDirective } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';

export interface Phone1Model {
  phone: string;
  contact: string;
}

@Component({
    selector: 'lib-company-phone-1',
    imports: [
        MatIcon
    ],
    templateUrl: './phone1.component.html',
    styleUrl: './phone1.component.scss'
})
export class Phone1Component extends BaseComponent<Phone1Model> {

  constructor(fragment: FragmentDirective) {
    super('Phone1', fragment);
  }
}
