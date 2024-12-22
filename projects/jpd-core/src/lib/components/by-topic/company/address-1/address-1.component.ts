import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FragmentDirective } from '../../../../common';
import { Address } from '../../../../content';
import { BaseComponent } from '../../../core/base/base.component';

export interface Address1Model {
  address: Address
}

@Component({
    selector: 'lib-company-address-1',
    imports: [
        MatIcon
    ],
    templateUrl: './address-1.component.html',
    styleUrl: './address-1.component.scss'
})
export class Address1Component extends BaseComponent<Address1Model> {

  constructor(fragment: FragmentDirective) {
    super('Address1', fragment);
  }
}
