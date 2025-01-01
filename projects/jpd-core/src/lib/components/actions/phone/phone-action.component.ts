import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BaseComponent } from '../../core/base/base.component';
import { ActionComponent } from '../_base-action/action.component';

export interface PhoneModel {
  phone: string;
}

@Component({
    selector: 'a4w-phone-action',
    imports: [CommonModule, MatButtonModule, MatIconModule, ActionComponent],
    templateUrl: './phone-action.component.html',
    styleUrl: './phone-action.component.scss'
})

// fixme avoid extending BaseComponent. Use CompanyService to get phone
export class PhoneActionComponent extends BaseComponent<PhoneModel> {

  readonly fab = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  readonly button = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  readonly iconTextButton = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  constructor() {
    super('PhoneAction');
  }

  call(): void {
    document.location.href = "tel:+4935476270";
  }
}
