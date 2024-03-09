import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { BaseComponent } from '@lib/components/core/base/base.component';
import { Address } from "@lib/content/company";
import { FragmentDirective } from '@lib/common/directives/fragment.directive';

export interface FooterModel {
  address: Address;
  phone: string;
  email: string;
  openingHours: string[];
}

@Component({
  selector: 'a4w-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BaseComponent<FooterModel> implements OnInit {

  @Input()
  headlineColor: string;

  @Input()
  textColor: string;

  address: string

  constructor(override fragment?: FragmentDirective) {
    super(fragment)
  }

  ngOnInit(): void {
    const dataAddress = this.model.address;
    this.address = `${dataAddress.street} ${dataAddress.no}, ${dataAddress.zip} ${dataAddress.city}`
  }
}
