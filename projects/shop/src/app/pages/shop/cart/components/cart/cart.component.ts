import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatAnchor, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { OrderPosition } from '@shop/pages/shop/cart/store/cart.model';
import { CartStore } from '@shop/pages/shop/cart/store/cart.store';

@Component({
  selector: 'shop-cart',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatAnchor,
    MatIcon,
    MatIconButton,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {

  cartStore = inject(CartStore);

  delete(item: OrderPosition): void {
    this.cartStore.remove(item.id);
  }

}