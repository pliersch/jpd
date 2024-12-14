import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CustomerAccountStore } from '@shop/pages/shop/account/store/account.store';

@Component({
  selector: 'shop-account',
  standalone: true,
  imports: [
    MatIcon,
    MatButton
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  accountStore = inject(CustomerAccountStore);

  discount = false;

  setDiscount(): void {
    const val = this.discount ? 0 : 15;
    this.accountStore.setDiscount(val);
    this.discount = !this.discount;
  }
}
