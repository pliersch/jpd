import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActionComponent, BaseComponent } from '@lib/components';

export interface PhoneModel {
  phone: string;
}

@Component({
  selector: 'a4w-phone-action',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ActionComponent],
  templateUrl: './phone-action.component.html',
  styleUrl: './phone-action.component.scss'
})

// fixme avoid extending BaseComponent. Use CompanyService to get phone
export class PhoneActionComponent extends BaseComponent<PhoneModel> {

  @Input({transform: booleanAttribute}) fab: boolean;

  @Input({transform: booleanAttribute}) button: boolean;

  constructor() {
    super();
  }

  call(): void {
    console.log('PhoneComponent call: ', this.model.phone)
  }
}
