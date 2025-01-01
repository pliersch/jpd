import { CommonModule } from '@angular/common';
import { Component, OnInit, input } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { FragmentDirective } from '../../../common';
import { Address } from '../../../content';
import { BaseComponent } from '../../core/base/base.component';

export interface ShopFooter1Model {
  address: Address;
  phone: string;
  email: string;
  openingHours: string[];
}

@Component({
    selector: 'a4w-shop-footer-1',
    imports: [CommonModule, MatIconModule],
    templateUrl: './shop-footer1.component.html',
    styleUrls: ['./shop-footer1.component.scss']
})
export class ShopFooter1Component extends BaseComponent<ShopFooter1Model> implements OnInit {

  readonly headlineColor = input<string>();

  readonly textColor = input<string>();

  address: string

  constructor(override fragment?: FragmentDirective) {
    super('ShopFooter1', fragment);
  }

  ngOnInit(): void {
    const dataAddress = this.model.address;
    this.address = `${dataAddress.street} ${dataAddress.no}, ${dataAddress.zip} ${dataAddress.city}`
  }
}
